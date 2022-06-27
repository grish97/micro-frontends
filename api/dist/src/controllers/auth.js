var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcryptjs";
import Joi from "@hapi/joi";
import User from "../models/user";
import { COOKIE_JWT_KEY, REFRESH_TOKEN_EXP_AGE } from "../middleware/helpers";
import { verifyRefreshToken } from "../middleware/auth";
import { handleError } from "../configs/handleError";
// validate user info
const reqisterSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
});
const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
});
/**
 * Login user
 * @param {Request} req
 * @param {Response} res
 */
export function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const user = yield User.findOne({ email: body.email });
        const isValidPassword = yield bcrypt.compare(body.password, (user === null || user === void 0 ? void 0 : user.password) || "");
        if (!isValidPassword || !user) {
            res
                .status(400)
                .send({ success: false, message: "Email or password incorrect" });
            return;
        }
        try {
            const { error } = yield loginSchema.validateAsync(body);
            if (error) {
                return res.json({ success: false, message: error.details[0].message });
            }
            else {
                yield user.generateRefreshToken();
                yield user.generateAccessToken();
                yield user.save();
                return res
                    .cookie(COOKIE_JWT_KEY, user.refreshToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    maxAge: REFRESH_TOKEN_EXP_AGE,
                })
                    .status(200)
                    .json({
                    success: true,
                    data: user.getPublicFields(),
                });
            }
        }
        catch (error) {
            handleError(error);
            res.status(400).json({ success: false, message: JSON.stringify(error) });
        }
    });
}
/**
 * Update user refresh/access tokens
 * @param {Request} req
 * @param {Response} res
 */
export function refreshToken(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cookies = req.cookies;
            if (!cookies[COOKIE_JWT_KEY]) {
                return res.status(401).json({
                    success: false,
                    error: "No refresh token provided",
                });
            }
            const cookieRefreshToken = cookies[COOKIE_JWT_KEY];
            const payload = yield verifyRefreshToken(cookieRefreshToken);
            const user = yield User.findOne({ _id: payload._id }).exec();
            if (!user) {
                return res.status(401).json({
                    status: false,
                    message: "User not found",
                });
            }
            else if (user.refreshToken !== cookieRefreshToken) {
                return res.status(403).json({
                    success: false,
                    message: "Old token. Not valid anymore",
                });
            }
            yield user.generateAccessToken();
            return res.status(200).json({
                success: true,
                data: user.getPublicFields(),
            });
        }
        catch (error) {
            handleError(error);
            res.status(403).json({
                success: false,
                error: (error === null || error === void 0 ? void 0 : error.message) || "Something wen wrong",
            });
        }
    });
}
/**
 * Register user
 * @param {Request} req
 * @param {Response} res
 */
export function logout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cookies = req.cookies;
            const refreshToken = cookies[COOKIE_JWT_KEY];
            if (!refreshToken) {
                return res.sendStatus(204);
            }
            const payload = yield verifyRefreshToken(refreshToken);
            const user = yield User.findOne({ _id: payload._id }).exec();
            if (!user) {
                res.clearCookie(COOKIE_JWT_KEY, {
                    httpOnly: true,
                });
                return res.sendStatus(204);
            }
            user.refreshToken = "";
            yield user.save();
            return res.status(200).clearCookie(COOKIE_JWT_KEY).json({
                success: true,
                message: "Successfully logged out",
            });
        }
        catch (error) {
            handleError(error);
            res.status(400).json({
                success: false,
                error: error,
            });
        }
    });
}
export function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        // check user by email is exist
        const existUser = yield User.findOne({ email: body.email });
        if (existUser) {
            res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
            return;
        }
        const salt = yield bcrypt.genSalt(10);
        const hashedPassword = yield bcrypt.hash(body.password, salt);
        const user = new User({
            username: body.username,
            email: body.email,
            password: hashedPassword,
        });
        try {
            const { error } = yield reqisterSchema.validateAsync(req.body);
            if (error) {
                return res.status(400).json({
                    success: false,
                    message: error.details[0].message,
                });
            }
            else {
                const savedUser = yield user.save();
                res.status(200).json({
                    success: true,
                    data: savedUser,
                });
            }
        }
        catch (error) {
            handleError(error);
            return res.status(400).json({ success: false, message: error });
        }
    });
}
//# sourceMappingURL=auth.js.map
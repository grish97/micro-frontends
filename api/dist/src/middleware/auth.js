var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import { fromEnv } from "../configs/envConfig";
import { handleError } from "../configs/handleError";
const ACCESS_TOKEN_SECRET = fromEnv("ACCESS_TOKEN_SECRET");
const REFRESH_TOKEN_SECRET = fromEnv("REFRESH_TOKEN_SECRET");
/**
 * Verify access token
 * @param {Request} req
 * @param {Response} res
 */
export function verfiyAccessToken(req, res, next) {
    try {
        const authHeader = req.headers["authorization"] || "";
        const accessToken = authHeader.split(" ")[1];
        if (!accessToken) {
            return res.status(401).json({
                success: false,
                message: "Invalid access token",
            });
        }
        jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (error, data) => {
            if (error) {
                return res.status(403).json({
                    success: false,
                    message: "A token is required for authentication",
                });
            }
            else if (data._id) {
                req._id = data._id;
                next();
            }
        });
    }
    catch (error) {
        handleError(error);
        res.status(401).json({
            success: false,
            message: error,
        });
    }
}
/**
 * Verfy refresh token
 * @param {string} refreshToken
 */
export function verifyRefreshToken(refreshToken) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
    });
}
//# sourceMappingURL=auth.js.map
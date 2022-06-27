var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Types } from "mongoose";
import GroupModel from "../models/group";
import MemberModel from "../models/member";
import { catchAsync } from "../middleware/helpers";
import AppError from "../services/AppError";
/**
 * Get all groups by creatorId
 * @param {Request<any, any, IGroupBody>} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req._id;
        const groups = yield GroupModel.find({ creatorId: userId });
        res.status(200).json({
            success: true,
            data: groups || [],
        });
    });
}
/**
 * Create new group and members
 * @param {Request} req
 * @param {Response} res
 */
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        const creatorId = req._id;
        const group = yield GroupModel.create({
            name: body.name,
            isPrivate: body.isPrivate,
            creatorId: creatorId,
        });
        yield group.save();
        // create members
        const members = yield createMemebrs(body.members, group.id);
        res.status(200).json({
            success: true,
            data: {
                group,
                members,
            },
        });
    });
}
/**
 * Create members by ids
 * @param {string[]} memberIds
 * @param {string} groupId
 * @returns {Promise<any[]>}
 */
function createMemebrs(memberIds, groupId) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = [];
        //@todo if needed check members are exist in requested id
        for (const userId of memberIds) {
            if (Types.ObjectId.isValid(userId)) {
                const member = new MemberModel({
                    groupId: groupId,
                    userId: userId,
                });
                promises.push(member.save());
            }
        }
        return yield Promise.all(promises);
    });
}
/**
 * Update Group
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body, params } = req;
        const creatorId = req._id;
        const groupId = params.groupId;
        const group = yield GroupModel.findById(groupId);
        if (!group) {
            return next(new AppError("Group with requested id is not defined", 400));
        }
        group.name = body.name;
        yield group.save();
        res.status(200).json({
            success: true,
            message: "Group successfuly updated",
        });
    });
}
function remove(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { params } = req;
        const userId = req._id;
        const groupId = params.groupId;
        if (!params.groupId) {
            return next(new AppError("Incorrect group id", 401));
        }
        const group = yield GroupModel.findOne({ creatorId: userId });
        if (!group) {
            return next(new AppError("Group by this id not found", 403));
        }
        yield MemberModel.deleteMany({ groupId });
        yield GroupModel.deleteOne({ groupId });
        res.status(200).json({
            success: true,
            message: "Group was deleted",
        });
    });
}
export default {
    getAll: catchAsync(getAll),
    create: catchAsync(create),
    update: catchAsync(update),
    remove: catchAsync(remove),
};
//# sourceMappingURL=group.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import MessageModel from "../models/message";
import GroupModel from "../models/group";
import MemberModel from "../models/member";
import { catchAsync } from "../middleware/helpers";
import AppError from "../services/AppError";
/**
 * Get all messages by group id
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const groupId = req.params.groupId;
        const messages = yield MessageModel.find({ groupId });
        res.status(200).json({
            success: true,
            data: messages || [],
        });
    });
}
/**
 * Create message
 * @param req
 * @param res
 * @param next
 */
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req._id;
        const body = req.body;
        let group = null;
        // @todo create new group and member
        if (!body.groupId && body.toId) {
            group = yield createGroup(userId, body.toId);
        }
        else {
            group = yield GroupModel.find({ groupId: body.groupId });
        }
        if (!group) {
            return next(new AppError("Group not found", 400));
        }
        const message = new MessageModel({
            content: body.content,
            groupId: group.id,
            creatorId: userId,
            lastIndex: 1, // temporary value
        });
        yield message.save();
        res.status(200).json({
            success: true,
            data: message,
        });
    });
}
/**
 * Create new group and member for this group
 * this method is experemental and can change in feature
 * @param creatorId
 * @param toId
 * @returns
 */
function createGroup(creatorId, toId) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = new GroupModel({
            creatorId: creatorId,
        });
        yield group.save();
        // add new member of this group
        const member = new MemberModel({
            groupId: group.id,
            userId: toId,
        });
        yield member.save();
        return group;
    });
}
/**
 * Update message
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageId = req.params.messageId;
        const body = req.body;
        const message = yield MessageModel.findOne({
            id: messageId,
        });
        if (!message) {
            return next(new AppError("Message not found", 400));
        }
        message.content = body.content;
        yield message.save();
        res.status(200).json({
            success: true,
            data: message,
        });
    });
}
/**
 * Update message
 * @param req
 * @param res
 * @param next
 */
function remove(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageId = req.params.messageId;
        yield MessageModel.deleteOne({
            id: messageId,
        });
        res.status(200).json({
            success: true,
            message: "Message Deleted",
        });
    });
}
export default {
    getAll: catchAsync(getAll),
    create: catchAsync(create),
    update: catchAsync(update),
    remove: catchAsync(remove),
};
//# sourceMappingURL=message.js.map
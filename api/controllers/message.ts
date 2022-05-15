import { Request, Response, NextFunction } from "express";
import MessageModel from "../models/message";
import GroupModel from "../models/group";
import { catchAsync } from "../middleware/helpers";
import AppError from "../services/AppError";
import { IMessageBody } from "../types/message";

/**
 * Get all messages by group id
 * @param req
 * @param res
 * @param next
 */
async function getAll(req: Request, res: Response, next: NextFunction) {
  const groupId = req.params.groupId;
  const messages = await MessageModel.find({ groupId });

  res.status(200).json({
    success: true,
    data: messages || [],
  });
}

/**
 * Create message
 * @param req
 * @param res
 * @param next
 */
async function create(
  req: Request<any, any, IMessageBody>,
  res: Response,
  next: NextFunction
) {
  const userId = (req as any)._id;
  const groupId = req.params.groupId;
  const body = req.body;

  const group = await GroupModel.find({ groupId });

  if (!group) {
    return next(new AppError("Group not found", 400));
  }

  const message = new MessageModel({
    content: body.content,
    groupId: groupId,
    userId: userId,
    lastIndex: 1,
  });

  await message.save();

  res.status(200).json({
    success: true,
    data: message,
  });
}

/**
 * Update message
 * @param req
 * @param res
 * @param next
 */
async function update(
  req: Request<any, any, IMessageBody>,
  res: Response,
  next: NextFunction
) {
  const userId = (req as any)._id;
  const groupId = req.params.groupId;
  const messageId = req.params.messageId;
  const body = req.body;

  const group = await GroupModel.find({ groupId });

  if (!group) {
    return next(new AppError("Group not found", 400));
  }

  const message = await MessageModel.findOne({
    id: messageId,
    userId: userId,
    groupId: groupId,
  });

  if (!message) {
    return next(new AppError("Message not found", 400));
  }

  message.content = body.content;

  await message.save();

  res.status(200).json({
    success: true,
    data: message,
  });
}

/**
 * Update message
 * @param req
 * @param res
 * @param next
 */
async function remove(req: Request, res: Response, next: NextFunction) {
  const { params, body } = req;

  const message = await MessageModel.findOne({
    id: params.messageId,
    userId: (req as any)._id,
  });
}

export default {
  getAll: catchAsync(getAll),
  create: catchAsync(create),
  update: catchAsync(update),
  remove: catchAsync(remove),
};

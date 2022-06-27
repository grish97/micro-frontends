import Joi, { ObjectSchema } from "joi";
import { IMessageBody } from "../types/message";
export declare const createMessageSchema: Joi.ObjectSchema<IMessageBody>;
export declare const updateMessageSchema: Joi.ObjectSchema<Partial<IMessageBody>>;
export default function validateMessage<T = IMessageBody>(schema: ObjectSchema<T>): (payload: Partial<IMessageBody>) => Promise<any>;

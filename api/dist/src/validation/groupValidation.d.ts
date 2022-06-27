import Joi, { ObjectSchema } from "joi";
import { IGroupBody } from "../types/group";
export declare const createGroupSchema: Joi.ObjectSchema<IGroupBody>;
export declare const updateGroupSchema: Joi.ObjectSchema<Partial<IGroupBody>>;
export default function validateGroup<T = IGroupBody>(schema: ObjectSchema<T>): (payload: Partial<IGroupBody>) => Promise<any>;

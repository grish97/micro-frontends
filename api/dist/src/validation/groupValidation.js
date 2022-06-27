var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Joi from "joi";
export const createGroupSchema = Joi.object({
    name: Joi.string(),
    members: Joi.array().items(Joi.string()).min(1).required(),
    isPrivate: Joi.bool().required(),
    creatorId: Joi.string().required(),
});
export const updateGroupSchema = Joi.object({
    name: Joi.string().required(),
});
export default function validateGroup(schema) {
    return (payload) => __awaiter(this, void 0, void 0, function* () {
        return yield schema.validateAsync(payload, {
            abortEarly: true,
        });
    });
}
//# sourceMappingURL=groupValidation.js.map
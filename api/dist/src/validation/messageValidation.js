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
export const createMessageSchema = Joi.object({
    content: Joi.string().required(),
    groupId: Joi.string().empty(),
    toId: Joi.string(),
});
export const updateMessageSchema = Joi.object({
    content: Joi.string().required(),
});
export default function validateMessage(schema) {
    return (payload) => __awaiter(this, void 0, void 0, function* () {
        return yield schema.validateAsync(payload, {
            abortEarly: true,
        });
    });
}
//# sourceMappingURL=messageValidation.js.map
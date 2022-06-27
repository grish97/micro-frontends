var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Joi from "@hapi/joi";
import { handleError } from "../configs/handleError";
import MemberModel from "../models/member";
const validationSchema = Joi.object({
    groupId: Joi.string().required(),
    userId: Joi.string().required(),
});
function validate(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield validationSchema.validateAsync(data);
        }
        catch (error) {
            handleError(error);
        }
    });
}
export function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        const validationResult = yield validate(body);
        if (!validationResult.error) {
            const member = yield MemberModel.create({
                groupId: body.groupId,
                userId: body.userId,
            });
            res.send(member);
        }
    });
}
//# sourceMappingURL=member.js.map
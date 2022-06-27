import { Schema, model } from "mongoose";
const Member = new Schema({
    groupId: {
        type: Schema.Types.ObjectId,
        ref: "group",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
}, { timestamps: true });
export default model("memeber", Member);
//# sourceMappingURL=member.js.map
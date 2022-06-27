import mongoose, { Schema, model } from "mongoose";
const Group = new Schema({
    name: {
        type: String,
        default: null,
    },
    isPrivate: {
        type: Boolean,
        default: true,
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
}, { timestamps: true });
export default model("group", Group);
//# sourceMappingURL=group.js.map
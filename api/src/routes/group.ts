import express from "express";
import group from "../controllers/group";
import validateGroup, {
  createGroupSchema,
  updateGroupSchema,
} from "../validation/groupValidation";
import validateBody from "../middleware/validateBody";
import { verfiyAccessToken } from "../middleware/auth";

const router = express.Router();

router.get("/", [verfiyAccessToken], group.getAll);

router.post(
  "/",
  [verfiyAccessToken, validateBody(validateGroup(createGroupSchema))],
  group.create
);

router.put(
  "/:groupId",
  [verfiyAccessToken, validateBody(validateGroup(updateGroupSchema))],
  group.update
);

router.delete("/:groupId", [verfiyAccessToken], group.remove);

export default router;

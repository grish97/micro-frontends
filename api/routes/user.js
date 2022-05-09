import express from "express";
import * as user from "../controllers/user.js";
import { verfiyAccessToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", user.getUsers);

export default router;

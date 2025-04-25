import express from "express";
import { register, login, getMe } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", requireAuth, getMe);

export default router;

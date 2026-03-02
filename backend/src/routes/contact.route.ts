import { Router } from "express";
import sendMessage from "../controllers/message.controller.ts";
import { authMiddleware } from "../middlewares/auth.middleware.ts";
import { messageLimiter } from "../middlewares/rateLimiter.ts";

const router = Router();

router.post("/contact", messageLimiter, authMiddleware, sendMessage);

export default router
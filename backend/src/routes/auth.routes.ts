import { Router } from "express";
import { register, login } from "../controllers/auth.controller.ts";
import { googleLogin } from "../controllers/auth.controller.google.ts";
import { loginLimiter, apiLimiter } from "../middlewares/rateLimiter.ts";

const router = Router();

router.post("/register", apiLimiter, register);
router.post("/login", loginLimiter, login);
router.post("/google", googleLogin);

export default router;
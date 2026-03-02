import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.ts";

const router = Router();

router.get("/profile", authMiddleware, (req, res) => {
    const user = (req as any).user;
    res.json({
        message: user
    });
});

export default router;
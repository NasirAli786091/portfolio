import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: "too many request, try again later"
});

export const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: "too many login attempts"
});

export const messageLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: "too many message sent, try later"
});
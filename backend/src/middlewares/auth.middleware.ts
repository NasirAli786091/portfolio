import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request & {user?: any}, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){ return res.status(401).json({message : "Unauthorized"})};
    const token = authHeader.split(" ")[1]!;
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY!) as{
            id: number,
            email: string,
            name: string,
            iat: number,
            exp: number
        };
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid Authentication"
        })
    }
}
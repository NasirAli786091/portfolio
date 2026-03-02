import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.ts";

export const errorHandler = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        // console.error("Error", err);
        if(err instanceof AppError){
            return res.status(err.statusCode).json({
                success: false,
                message: err.message,
            });
        };

        return res.status(500).json({
            success: false,
            messsage: "Internal Server Error",
        });
};
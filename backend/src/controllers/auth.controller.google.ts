import type { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.ts";
import { AppError } from "../utils/AppError.ts";

const client = new OAuth2Client(process.env.CLIENT_ID);

export const googleLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.body;
    if(!token) throw new AppError("Token missing", 400);
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
        const payload = ticket.getPayload();
        if(!payload?.email) throw new AppError("Invalid google token", 400);

        const { email, sub: googleId } = payload;
        const name = email.split("@")[0];

        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        let user;

        if(existingUser.rows.length > 0){
            user = existingUser.rows[0];
            if(!user.google_id){
                await pool.query("UPDATE users SET google_id = $1   WHERE id = $2", [googleId, user.id]);
            };
        }else{
            const newUser = await pool.query("INSERT INTO users (name, email, google_id) VALUES ($1,$2,$3) RETURNING *",
                [name, email, googleId]
            );
            user = newUser.rows[0];
        }

        const appToken = jwt.sign(
            { id: user.id, email: user.email },
            process.env.CLIENT_SECRET!,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Login SuccessFull",
            token: appToken,
            user:{
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        next(error);
    }
}
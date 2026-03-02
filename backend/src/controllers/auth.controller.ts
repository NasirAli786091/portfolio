import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { pool } from "../config/db.ts";
import { AppError } from "../utils/AppError.ts";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) throw new AppError("All fields are required", 400);

    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    
    if(existingUser.rows.length > 0) throw new AppError("email already registered", 400); 
    
    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
            [name, email, hashedPassword]
        );
        res.json({
            message : "Registration Successfull"
        });
    }catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if(!email || !password) throw new AppError("email and password are required", 400);

    try{
        const result = await pool.query("SELECT * from users WHERE email = $1", [email]);
        
        if(!result.rows.length) throw new AppError("Invalid Credentials", 400);
        
        const user = result.rows[0];
        
        const verified = await bcrypt.compare(password, user.password);
        
        if(!verified) throw new AppError("Password does not match", 400);

        const secretKey = process.env.SECRET_KEY;
        
        if(!secretKey) throw new AppError("Secret Key not set", 400);
        
        // console.log("user name", user.name, user.id, user.email);
        const token = jwt.sign(
            {id: user.id, name: user.name, email: user.email},
            secretKey,
            {expiresIn: "1d"},
        );
        res.json({
            message: "Login Successfull",
            token,
            datas: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        next(error);
    }
}
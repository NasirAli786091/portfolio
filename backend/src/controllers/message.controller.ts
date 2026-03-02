import type { Request, Response} from "express";
import { pool } from "../config/db.ts";

const sendMessage = async (req: Request, res: Response) => {
    const { message } = req.body;
    const userId = (req as any).user.id;
    // console.log("Id", userId);
    try {
        await pool.query("INSERT INTO messages (user_id, message) VALUES($1, $2)", [userId, message]);
        res.status(201).json({
            message: "msg sent successfull"
        })
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
        console.log("send message error:", error);
    }
};

export default sendMessage;
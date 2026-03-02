import { Pool } from "pg";

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

export const connectDB = async () => {
    try {
        await pool.query("SELECT NOW()");
        console.log("Connected DB");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
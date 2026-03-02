import express  from "express";
import cors from "cors";
import { connectDB } from "./config/db.ts";
import home from "./routes/home.route.ts";
import authRoutes from "./routes/auth.routes.ts";
import profile from "./routes/profile.routes.ts";
import contactRoute from "./routes/contact.route.ts";
import { errorHandler } from "./middlewares/error.middleware.ts";
// import { apiLimiter, loginLimiter, messageLimiter } from "./middlewares/rateLimiter.ts";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use(home);
app.use("/api/auth", authRoutes);
app.use("/api",contactRoute);
app.use("/api", profile);
app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
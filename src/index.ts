import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParse from "cookie-parser";
import "dotenv/config";
import authRoutes from "./routes/authRouter";
import userRoutes from "./routes/userRouter";

//db
mongoose.connect(process.env.MANGODB_URL as string);

const app = express();
app.use(cookieParse());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test deployment
app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK!" });
});

// routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)

// server listening
app.listen(8080, () => {
    console.log("Server listening at localhost:8080");
});
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/authRouter";
import userRoutes from "./routes/userRouter";

//db
mongoose.connect(process.env.MANGODB_URL as string)
    .then(() => {
        console.log("Conected to database");
    });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)

// server listening
app.listen(8080, () => {
    console.log("Server listening at localhost:8080");
});
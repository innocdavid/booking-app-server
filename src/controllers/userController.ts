import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

const createUser = async (req: Request, res: Response) => {
    const { email } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(403).json({ message: "User already exists" });
        }

        const newUser = new User(req.body);
        await newUser.save();

        const token = jwt.sign(
            { userId: newUser.id },
            process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: "1d",
            }
        );

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });

        return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: "Somthing went wrong" });
    }
};

export default {
    createUser,
}
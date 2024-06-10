import express from "express";
import userController from "../controllers/userController";
import { validateUser } from "../middlewares/validate";

const router = express.Router();

router.post("/register", validateUser, userController.createUser);

export default router;
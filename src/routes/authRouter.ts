import express from "express";
import authController from "../controllers/authController";
import { validateLogin } from "../middlewares/validate";

const router = express.Router();

router.post("/login", validateLogin, authController.loginAuth);

export default router;
import express, { Request, Response } from "express";
import authController from "../controllers/authController";
import { validateLogin } from "../middlewares/validate";
import verifyAuthToken from "../middlewares/auth";

const router = express.Router();

router.post("/login", validateLogin, authController.loginAuth);

router.get("/validate-token", verifyAuthToken, (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId });
})

router.post("/logout", async (req: Request, res: Response) => {
    res.cookie("auth_token", "", {
        expires: new Date(0),
    });

    res.send();
});

export default router;
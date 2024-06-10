import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";


const handleValidationErrors = async (
    req: Request, 
    res: Response, 
    next: NextFunction 
) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) 
        return res.status(400).json({ message: errors.array() });

    next();
}

export const validateUser = [
    body("email")
        .trim()
        .isEmail()
        .notEmpty()
        .withMessage("Please enter a valid email address"),
    body("password")
        .trim()
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body("firstName")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("First name is required"),
    body("lastName")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("Last name is required"),
    handleValidationErrors,
];
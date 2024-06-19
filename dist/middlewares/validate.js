"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateUser = void 0;
const express_validator_1 = require("express-validator");
const handleValidationErrors = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(400).json({ message: errors.array() });
    next();
});
exports.validateUser = [
    (0, express_validator_1.body)("email")
        .trim()
        .isEmail()
        .notEmpty()
        .withMessage("Please enter a valid email address"),
    (0, express_validator_1.body)("password")
        .trim()
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    (0, express_validator_1.body)("firstName")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("First name is required"),
    (0, express_validator_1.body)("lastName")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("Last name is required"),
    handleValidationErrors,
];
exports.validateLogin = [
    (0, express_validator_1.body)("email")
        .isEmail()
        .notEmpty()
        .withMessage("Please enter a valid email address"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    handleValidationErrors,
];

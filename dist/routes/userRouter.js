"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const validate_1 = require("../middlewares/validate");
const router = express_1.default.Router();
router.post("/register", validate_1.validateUser, userController_1.default.createUser);
exports.default = router;

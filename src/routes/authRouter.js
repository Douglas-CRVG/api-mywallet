import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware.js";
import emailValidationMiddleware from "../middlewares/emailValidationMiddleware.js"

const authRouter = Router();
authRouter.post("/sign-up", userSchemaValidationMiddleware, emailValidationMiddleware, signUp);

export default authRouter;
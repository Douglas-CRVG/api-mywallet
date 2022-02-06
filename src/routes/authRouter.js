import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import userSchemaValidationMiddleware from "../middlewares/userSchemaValidationMiddleware.js";
import emailValidationMiddleware from "../middlewares/emailValidationMiddleware.js"
import signInSchemaValidationMiddleware from "../middlewares/signInSchemaValidationMiddleware.js";

const authRouter = Router();
authRouter.post("/sign-up", userSchemaValidationMiddleware, emailValidationMiddleware, signUp);
authRouter.post("/sign-in", signInSchemaValidationMiddleware, signIn);

export default authRouter;
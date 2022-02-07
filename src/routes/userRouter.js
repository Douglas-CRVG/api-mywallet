import { Router } from "express";
import { records } from "../controllers/userController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const userRouter = Router();
userRouter.get("/records", tokenValidationMiddleware, records)

export default userRouter;
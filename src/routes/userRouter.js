import { Router } from "express";
import { record, records } from "../controllers/userController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const userRouter = Router();
userRouter.use(tokenValidationMiddleware)
userRouter.get("/records", records);
userRouter.post("/record", record)

export default userRouter;
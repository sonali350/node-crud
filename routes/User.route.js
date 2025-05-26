import express from "express";
import { signUp,signIn } from "../controller/User.controller.js";
const userRouter = express.Router();
userRouter.post("/sign-up", signUp);
userRouter.post("/sign-in",signIn);

export default userRouter;

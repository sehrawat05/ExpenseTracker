import express from "express";
import isAuth from "../middleware/auth.js";
import { getUser } from "../controllers/user.controller.js";
const userRouter = express.Router();
userRouter.get("/current",isAuth,getUser);
export default userRouter;
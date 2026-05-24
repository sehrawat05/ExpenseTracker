import express from "express";
import isAuth from "../middleware/auth.js";
import { addExpense } from "../controllers/expense.controller.js";
const expenseRouter = express.Router();
expenseRouter.post("/add",isAuth,addExpense);
export default expenseRouter;
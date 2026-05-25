import express from "express";
import isAuth from "../middleware/auth.js";
import { addExpense, getExpense,updateExpense,deleteExpense } from "../controllers/expense.controller.js";
const expenseRouter = express.Router();
expenseRouter.post("/add",isAuth,addExpense);
expenseRouter.get("/all",isAuth,getExpense);
expenseRouter.put("/update/:id",isAuth,updateExpense);
expenseRouter.delete("/delete/:id",isAuth,deleteExpense);
export default expenseRouter;
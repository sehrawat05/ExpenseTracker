import { Expense } from "../models/expense.model.js";
import { User } from "../models/user.model.js";
export const addExpense=async(req,res)=>{
    try{
        const {description,amount,category,date}=req.body;
        let expense=await Expense.create({description,amount,category,date,user:req.userId});
        let user=await User.findByIdAndUpdate(req.userId,{
            $push:{expenses:expense._id}
        },{new:true});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(201).json({message:"Expense added successfully",expense});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}
export const getExpense=async(req,res)=>{
    try{
        let expenses=await Expense.find({user:req.userId});
        res.status(200).json({message:"Expenses fetched successfully",expenses});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}
export const updateExpense=async(req,res)=>{
    try{
        const {id}=req.params;
        const {description,amount,category,date}=req.body;
        let expense=await Expense.findByIdAndUpdate(id,{description,amount,category,date},{new:true});
        if(!expense){
            return res.status(404).json({message:"Expense not found"});
        }
        res.status(200).json({message:"Expense updated successfully",expense});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}
export const deleteExpense=async(req,res)=>{
    try{
        const {id}=req.params;
        let expense=await Expense.findByIdAndDelete(id);
        if(!expense){
            return res.status(404).json({message:"Expense not found"});
        }
        let user=await User.findByIdAndUpdate(req.userId,{
            $pull:{expenses:expense._id}
        },{new:true});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"Expense deleted successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}
import { Expense } from "../models/expense.model.js";
import { User } from "../models/user.model.js";
export const addExpense=async(req,res)=>{
    try{
        const {description,amount,category,date}=req.body;
        let expense=await Expense.create({description,amount,category,date});
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

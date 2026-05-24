import mongoose from "mongoose";
const expenseSchema=new mongoose.Schema({
    descriptipn:String,
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

export const Expense = mongoose.model('Expense', expenseSchema);
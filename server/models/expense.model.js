import mongoose from "mongoose";
const expenseSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
   category: {
    type: String,
    enum: [
        "Food",
        "Travel",
        "Shopping",
        "Bills",
        "Entertainment",
        "Health",
        "Education",
        "Salary",
        "Investment",
        "Other"
    ],
    required: true
},
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

export const Expense = mongoose.model('Expense', expenseSchema);
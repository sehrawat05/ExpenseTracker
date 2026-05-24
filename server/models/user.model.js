import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    expenses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Expense"
    }],
    
},{timestamps:true})

export const User = mongoose.model('User', userSchema);

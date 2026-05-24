import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../config/token.js";

export const signUp=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        let existUser=await User.findOne({email});
        if(existUser){
            return res.status(400).json({message:"User already exists"});
        }
        let hashPassword=await bcrypt.hash(password,10);
        let user=await User.create({name,email,password:hashPassword});
        let token=await generateToken(user._id);
        res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({message:"User created successfully", user});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        let isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        let token=await generateToken(user._id);
        res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({message:"User logged in successfully", user});
        
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const logout=async(req,res)=>{
    try{
    res.clearCookie("token");
    res.status(200).json({message:"User logged out successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

import { User } from "../models/user.model"

export const getUser=async(req,res)=>{
    try{
        const user=await User.findById(req.userId).select("-password").populate("expenses");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User found", user});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}
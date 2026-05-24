import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isAuth=(req,res,next)=>{
    try{
        let {token}=req.cookies;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        let verifyToken=jwt.verify(token,process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.userId=verifyToken.userId;
        next();
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

export default isAuth;
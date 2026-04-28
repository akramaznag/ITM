import jwt from "jsonwebtoken";

const generateToken =(userId,res)=>{
    const payload ={id:userId};
    const token = jwt.sign(payload,process.env.JWT_KEY,{
        expiresIn:process.env.JWT_EXPIRES_IN || "120m"
    })
    
    res.cookie("jwt",token,{
        httpOnly:true,
        secure :process.env.NODE_ENV==="prod",
        sameSite :"strict",
        maxAge: 120 * 60 * 1000 
      
        
    })
    return token;


}
export default generateToken;
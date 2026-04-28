import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';
const authMiddleware = async (req,res,next)=>{

    let token ;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        token = req.headers.authorization.split(" ")[1]

    }
    else if (req.cookies?.jwt) {
        token = req.cookies.jwt

    }

    if (!token){
        return res.status(401).json({error:"Not authorized, no token provided"})
    }


    try{
        //verify token and extract the payload (user Id) //you can see that in in generateJWT function
        const decoded_token = jwt.verify(token,process.env.JWT_KEY);

        const user = await prisma.user.findUnique({
            where:{id:decoded_token.id}
        })

        if (!user){
            
            return res.status(401).json({error:"User no longer exists"})

        }


        req.user = user;

       
        console.log("Cookies received:", req.cookies);




        next();

    }
    catch(err){
         return res.status(500).json({error:"something went wrong ! check the token"})


    }

}

export default authMiddleware;
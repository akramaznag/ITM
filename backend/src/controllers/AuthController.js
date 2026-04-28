import { prisma } from "../config/db.js";
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js";

export async function register(req,res){
    const {firstName,lastName,userName,email,password,phone} = req.body;
    try{

        const getUser = await prisma.user.findUnique({
            where:{email:email}
        })
        if(getUser){
            return res.status(400).json({message:"account already created with this email"})
        }
        // hash password
    
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
    
        //create user
        const user = await prisma.user.create({
            data:{
                firstName:firstName,
                lastName:lastName,
                userName:userName,
                email:email,
                password:hashedPassword,
                phone:phone
            }
        })
        const token=generateToken(user.id,res)
        res.status(201).json({message:"client created successfully !",data:{
            user:{
                username:user?.userName,email:user?.email
            },
            token:token
            
        }})
    }
    catch (e){
        console.error(e)
        return res.status(500).json({error:"something went wrong "})
    }
    //check if user exists


}
export async function login(req,res){
    const {email,password} = req.body;
    try{

        const getUser = await prisma.user.findUnique({
            where:{email:email}
        })
        if(!getUser){
            return res.status(401).json({message:"invalid email or password"})
        }
        const isPasswordValid = bcrypt.compare(password,getUser.password)
        if(!isPasswordValid){

            return res.status(401).json({message:"invalid email or password"})


        }
        //generate token
        const token = generateToken(getUser.id,res)

        res.status(200).json({message:"user is logged in ",
            data:{
                id:getUser.id,
                username:getUser.userName,
                email:getUser.email,
                role:getUser.role
            },
            token
    })
     
    }
    catch (e){
        console.error(e)
        return res.status(500).json({error:"something went wrong "})
    }


}

export async function logout(req,res){
    res.cookie("jwt","",{
        expires:new Date(0),
        httpOnly:true,
        sameSite: "strict",

    })
    return res.status(200).json({message:"user is logged out "})

}
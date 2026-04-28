import {prisma} from '../config/db.js'
import response from '../utils/Response.js';
import bcrypt from "bcrypt"



export const technicians = async (req,res)=>{
    const technicians=await prisma.user.findMany({
        where:{role:'TECHNICIAN'}
    });
    res.status(200).json({message:"technicians fetched successfully !",data:technicians})


}

export const addTechnician = async (req,res)=>{
    const {firstName,lastName,userName,email,password,phone} = req.body;
    try{

        const getTechnican = await prisma.user.findUnique({
            where:{email:email}
        })
        if(getTechnican){
            return response(res,400,'technician already created with email')
        }
        // hash password
    
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
    
        //create technician
        const technician = await prisma.user.create({
            data:{
                firstName:firstName,
                lastName:lastName,
                userName:userName,
                email:email,
                password:hashedPassword,
                phone:phone,
                role:'TECHNICIAN'
            }
        })
        response(res,201,'technician is added successfully !',technician)
    }
    catch (e){
        console.error(e)
        return response(res,500,'something went wrong, please try again')

    }




}

export const getFilteredTechnician = async (req,res)=>{
    const {id,userName,firstName,lastName} = req.body;
    const technician = await prisma.user.findFirst({
        where: {
            role:'TECHNICIAN',
            OR: [
            id && { id },
            userName && { userName },
            firstName && { firstName },
            lastName && { lastName },
            
            ].filter(Boolean),
        },
    });
    if(!technician){
        return res.status(400).json({error:'technician was not found,please try again !'})
        
    }
    res.status(200).json({message:'technician is successfully found',technician:technician})
    

}

export const getTechnicianById = async (req,res)=>{
    const {id} = req.params;
    const ID=parseInt(id);
    const technician = await prisma.user.findUnique({
        where:{id:ID}
    })
    if(!technician){
        return res.status(400).json({error:`technician was not found with this id : ${ID}`})
    }
    res.status(200).json({message:'technician is successfully found',technician:technician})





}
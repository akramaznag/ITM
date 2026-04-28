import { prisma } from "../config/db.js";
import response from '../utils/Response.js'

export const clients = async (req,res)=>{
    const clients = await prisma.user.findMany({
        where:{role:'CLIENT'}

    })
    if (!clients){

        return response(res,400,'no clients were found!');
    }
    
    return response(res,200,'clients fetched successfully !',clients)


    
}

export const getFilteredClient = async (req,res)=>{
    const {id,userName,firstName,lastName} = req.body;
    const client = await prisma.user.findFirst({
        where: {
            role:'CLIENT',
            OR: [
            id && { id },
            userName && { userName },
            firstName && { firstName },
            lastName && { lastName },
            
            ].filter(Boolean),
        },
    });
    if(!client){
        return response(res,400,'client was not found')
        
    }
    response(res,200,'client was found',client)
    

}

export const getClientById = async (req,res)=>{
    const {id} = req.params;
    const ID=parseInt(id);
    const client = await prisma.user.findUnique({
        where:{id:ID}
    })

    if(!client){
        return response(res,400,`client was not found with this id : ${ID}`)
    }

    response(res,200,"client is successfully found",client)






}
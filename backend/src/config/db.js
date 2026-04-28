import {PrismaClient} from '@prisma/client';
const prisma =new PrismaClient({
    log:process.env.NODE_ENV === "dev" ? ["query","error","warn"]
    : ["error"]
})
const connectDB = async ()=>{
    try{
        await prisma.$connect();
        console.log('db is connected successfully to prisma');
    }
    catch(e){
        console.log('Database connection error : ',e);
        process.exit(1)


    }
} 
const disconnectDB = async ()=>{
   
        await prisma.$disconnect();
   
} 
export {prisma,connectDB,disconnectDB}
import express from 'express';
import {config} from 'dotenv'
import cors from 'cors';
import { connectDB,disconnectDB } from './config/db.js';

config() 
connectDB();

//import  Routes
import AuthRoutes from '../src/routes/AuthRoutes.js';
import TechnecianRoutes from '../src/routes/TechnecianRoutes.js'
import ProductRoutes from '../src/routes/ProductRoutes.js'
import ClientRoutes from '../src/routes/ClientRoutes.js'


//instance of our app
const app = express();

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 8000;

app.use(cors({ 
  origin:'http://localhost:5173',
  credentials:true
}));

//Auth route
app.use('/api/auth',AuthRoutes);

//Technician Route

app.use('/api/technicians',TechnecianRoutes)

//Client Route

app.use('/api/clients',ClientRoutes)

//Product Route

app.use('/api/products',ProductRoutes)






app.listen(PORT,()=>console.log(`server running on port ${PORT}`))

//handling database connection errors gracefully 
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Gérer les exceptions non interceptées

process.on("uncaughtException", async (err) => {

    console.error("Exception non interceptée :", err);

    await disconnectDB();

    process.exit(1);

});

process.on("SIGTERM", async () => {

    console.log("SIGTERM reçu, arrêt en douceur");

    server.close(async () => {

    await disconnectDB();

    process.exit(0);

    });

});
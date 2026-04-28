import { prisma } from "../config/db.js";
import response from "../utils/Response.js";

export const getProducts = async (req,res)=>{
  try{

    const products = await prisma.product.findMany();
    return response(res,200,'products fetched successfully !',products)
  }
  catch(err){
    console.log(err)
    return response(res,500,'something went wrong!')


  }


}

export const AddProduct = async (req, res) => {
  try {
    const {name, description, brand,  category, status,  price,  stock } = req.body;

    // Check if product already exists
    const getProduct = await prisma.product.findUnique({
      where: { name :name,brand:brand},
    });

    if (getProduct) {
      // return res.status(400).json({ message: "Product already exists" });
      return response(res,400,'Product already exists')
    }

    // Create product
    const product = await prisma.product.create({
            data: {
                name,
                description,
                brand,
                category,
                status,
                price,
                stock,
            },
    });

    // return res.status(201).json(product);
    response(res,201,'product is added successfully !',product)
  } catch (error) {
    // return res.status(500).json({ message: "Something went wrong", error: error.message, });
    return response(res,500,'something went wrong !')
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    // Check if product exists
    const getProduct = await prisma.product.findUnique({
        where: { id :id}
    });

    if (!getProduct) {
      return response(res,400,'Product was not found with the id:',id)
    }

    const updateData = Object.fromEntries(
        Object.entries(req.body).filter(([_, v]) => v !== undefined)
    );

    const product = await prisma.product.update({
      where: { id },
      data: updateData,
    });

    // return res.status(201).json(product);
    response(res,201,'product is updated successfully !',product)
  } catch (error) {
    // return res.status(500).json({ message: "Something went wrong", error: error.message, });
    return response(res,500,'something went wrong !')
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    // Check if product exists
    const getProduct = await prisma.product.findUnique({
        where: { id :id}
    });

    if (!getProduct) {
      return response(res,400,'Product was not found with the id:',id)
    }

    response(res,201,'product exists !',getProduct)
  } catch (error) {
    // return res.status(500).json({ message: "Something went wrong", error: error.message, });
    return response(res,500,'something went wrong !')
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    // Check if product exists
    const getProduct = await prisma.product.findUnique({
        where: { id :id}
    });

    if (!getProduct) {
      return response(res,400,'Product was not found with the id:',id)
    }
    await prisma.product.delete({  where:{id:id} });

    response(res,200,'product deleted',getProduct)
  } catch (error) {
    // return res.status(500).json({ message: "Something went wrong", error: error.message, });
    return response(res,500,'something went wrong !')
  }
};
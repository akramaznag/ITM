import express from 'express'
import { AddProduct, deleteProduct, getProductById, getProducts, UpdateProduct } from '../controllers/ProductController.js';
import authMiddleware from '../middlewares/AuthMiddleware.js';
import AuthorizeRoles from '../middlewares/AuthorizeRoles.js';
import { ValidateRequest } from '../middlewares/RequestValidator.js';
import {AddProductShema,updateProductSchema} from '../validations/ProductShema.js';

const router = express.Router();

router.use(authMiddleware,AuthorizeRoles('ADMIN'));

router.get('',getProducts);

router.get('/:id',getProductById);

router.post('',ValidateRequest(AddProductShema),AddProduct);

router.patch('/:id',ValidateRequest(updateProductSchema),UpdateProduct);

router.delete('/:id',deleteProduct);


export default router;
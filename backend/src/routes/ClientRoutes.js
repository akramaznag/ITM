import express from 'express'
import { clients, getClientById, getFilteredClient } from '../controllers/ClientController.js';
import authMiddleware from '../middlewares/AuthMiddleware.js';
import AuthorizeRoles from '../middlewares/AuthorizeRoles.js';

const router = express.Router();

router.get('',authMiddleware,AuthorizeRoles('ADMIN','TECHNICIAN'),clients);
router.post('/filterClient',authMiddleware,AuthorizeRoles('ADMIN','TECHNICIAN'),getFilteredClient);
router.get('/:id',authMiddleware,AuthorizeRoles('ADMIN','TECHNICIAN'),getClientById);

export default router;



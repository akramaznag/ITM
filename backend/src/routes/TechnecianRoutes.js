import express from 'express'
import { getFilteredTechnician, technicians,getTechnicianById, addTechnician } from '../controllers/TechnicianController.js';
import authMiddleware from '../middlewares/AuthMiddleware.js';
import AuthorizeRoles from '../middlewares/AuthorizeRoles.js';
import {ValidateRequest} from '../middlewares/RequestValidator.js';
import RegisterShema from '../validations/RegisterShema.js';

const router = express.Router();
router.use(authMiddleware);
router.use(AuthorizeRoles('ADMIN'));

router.get('',technicians);
router.post('',ValidateRequest(RegisterShema),addTechnician);

router.post('/filterTechnician',getFilteredTechnician);
router.get('/:id',getTechnicianById);

export default router;



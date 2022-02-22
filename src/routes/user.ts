import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.get('/', userController.getAllUsers)

router.post('/', userController.creatUser)

export default router;

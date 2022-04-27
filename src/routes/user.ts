import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

router.post('/login', userController.checkCredentials)

export default router;

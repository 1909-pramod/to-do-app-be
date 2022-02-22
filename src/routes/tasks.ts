import express from 'express';
import taskController from '../controllers/taskControllers'

const router = express.Router();

router.get('/:userId', taskController.getUserTasks)

router.post('/', taskController.createTaskForUser)

export default router;

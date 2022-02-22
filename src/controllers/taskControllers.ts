import { Request, Response } from 'express'
import { createTask, CreateTaskParams, getAllUsertasks } from '../queries/taskDbQueries';

const getUserTasks = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = await getAllUsertasks(+userId)
    res.status(200).send({ data, success: true })
  } catch (error: any) {
    res.status(400).send({ message: error?.message ? error.message : 'Error', success: false })
  }
}

const createTaskForUser = async (req: Request, res: Response) => {
  try {
    const {
      taskTitle,
      taskDescription,
      startDate,
      endDate,
      status,
      closedDate,
      user_id,
      parentTaskId
    }: CreateTaskParams = req.body
    const data = await createTask({
      taskTitle,
      taskDescription,
      startDate,
      endDate,
      status,
      closedDate,
      user_id,
      parentTaskId
    })
    res.status(200).send({ data, success: true })
  } catch (error: any) {
    res.status(400).send({ message: error?.message ? error.message : 'Error', success: false })
  }
}

const taskController = {
  getUserTasks,
  createTaskForUser
}

export default taskController

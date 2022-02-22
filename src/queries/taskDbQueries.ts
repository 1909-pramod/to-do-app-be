import { PrismaClient } from '@prisma/client';
import prismaExecute from './prismaConnection';

export interface CreateTaskParams {
  taskTitle: string,
  taskDescription?: string,
  startDate: string,
  endDate?: string,
  status: string,
  closedDate?: string,
  user_id: number,
  parentTaskId?: number
}

export const createTask = async ({
  taskTitle,
  taskDescription,
  startDate,
  endDate,
  status,
  closedDate,
  user_id,
  parentTaskId
}: CreateTaskParams) => {
  const executeFunction = async (prisma: PrismaClient) => {
    const Task = await prisma.tasks.create({
      data: {
        task_title: taskTitle,
        task_description: taskDescription,
        start_date: new Date(startDate),
        end_date: endDate ? new Date(endDate) : null,
        status: status,
        closed_date: closedDate ? new Date(closedDate) : null,
        user_id,
        parent_task_id: parentTaskId ? parentTaskId : null
      }
    })
    return Task
  }
  return await prismaExecute(executeFunction)
}

export const getAllUsertasks = async (userId: number) => {
  const executeFunction = async (prisma: PrismaClient) => {
    const UserTasks = await prisma.tasks.findMany({
      where: {
        user_id: userId
      }
    })
    return UserTasks
  }
  return await prismaExecute(executeFunction)
}

export const getTaskWithTaskId = async (userId: number, taskId: number) => {
  const executeFunction = async (prisma: PrismaClient) => {
    const UserTask = await prisma.tasks.findFirst({
      where: {
        id: taskId,
        user_id: userId
      }
    })
    return UserTask
  }
  return await prismaExecute(executeFunction)
}

export const deleteTaskWithId = async (userId: number, taskId: number) => {
  const executeFunction = async (prisma: PrismaClient) => {
    const taskDeleted = await prisma.tasks.updateMany({
      where: {
        id: taskId,
        user_id: userId
      },
      data: {
        deleted_at: new Date()
      }
    })
    return taskDeleted.count
  }
  return await prismaExecute(executeFunction)
}

export const updateTaskCloseDate = async (userId: number, taskId: number, closeDate: string = '') => {
  const executeFunction = async (prisma: PrismaClient) => {
    const taskClosed = await prisma.tasks.updateMany({
      where: {
        id: taskId,
        user_id: userId
      },
      data: {
        closed_date: closeDate ? new Date(closeDate) : new Date()
      }
    })
    return taskClosed
  }
  return await prismaExecute(executeFunction)
}

import { PrismaClient } from '@prisma/client';
import { prisma } from '..';

export type ExecuteFunction = (prisama: PrismaClient) => any

const prismaExecute = async (executeFunction: ExecuteFunction) => {
  try {
    return await executeFunction(prisma)
  } catch (error) {
    console.log(error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

export default prismaExecute
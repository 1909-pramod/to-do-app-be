import { PrismaClient } from '@prisma/client'
import prismaExecute from './prismaConnection'

export interface CreateUserParams {
  email: string,
  username: string,
  password: string,
  dob?: string,
  firstName: string,
  lastName?: string
}

export const createUserQuery = async ({
  email,
  username,
  password,
  dob,
  firstName,
  lastName
}: CreateUserParams) => {
  const executeFunction = async (prisma: PrismaClient) => {
    const User = await prisma.user.create({
      data: {
        email,
        username,
        password,
        dob: dob ? new Date(dob) : null,
        first_name: firstName,
        last_name: lastName
      }
    })
    return User
  }
  return await prismaExecute(executeFunction)
}

export const getAllUserQuery = async () => {
  const executeFunction = async (prisma: PrismaClient) => {
    const Users = await prisma.user.findMany()
    return Users
  }
  return await prismaExecute(executeFunction);
}

export const getUserWithIdQuery = async (userId: number) => {
  const executeFunction = async (prisma: PrismaClient) => {
    const User = await prisma.user.findUnique({
      where: { id: userId }
    })
    return User
  }
  return await prismaExecute(executeFunction);
}

export const getUserWithEmail = async (email: string) => {
  const executeFunction = async (prisma: PrismaClient) => {
    const User = await prisma.user.findFirst({
      where: { email }
    })
    return User
  }
  return await prismaExecute(executeFunction);
}

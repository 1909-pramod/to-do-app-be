import { Request, Response, NextFunction } from 'express'
import { CreateUserParams, createUserQuery } from '../queries/userDbQueries'

const creatUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password, dob, firstName, lastName }: CreateUserParams = req.body
    const data = await createUserQuery({ email, username, password, dob, firstName, lastName })
    res.status(200).send({ data, success: true })
  } catch (error: any) {
    res.status(400).send({ message: error?.message ? error.message : 'Error', success: false })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    res.status(200).send('got all users')
  } catch (error: any) {
    res.status(400).send({ message: error?.message ? error.message : 'Error', success: false })
  }
}

const userController = {
  creatUser,
  getAllUsers
}

export default userController
import { Request, Response } from 'express'
import { CreateUserParams, createUserQuery } from '../queries/userDbQueries';
import bcrypt from 'bcrypt';
import { checkUserExistsWithCredtials } from '../helpers/userHelper';
import jwt from 'jsonwebtoken';
import keys from '../config/keys';

const createUser = async (req: Request, res: Response) => {
	try {
		let { email, username, password, dob, firstName, lastName }: CreateUserParams = req.body
		const salt = await bcrypt.genSalt(10)
		password = await bcrypt.hash(password, salt)
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

const checkCredentials = async (req: Request, res: Response) => {
	try {
		const {
			email,
			password
		}: {
			email: string,
			password: string
		} = req.body
		const dbUser = await checkUserExistsWithCredtials(email, password)
		const user = {
			id: dbUser.id,
			username: dbUser.username,
			firstName: dbUser.first_name,
			lastName: dbUser.last_name,
			email: dbUser.email,
			dateOfBirth: dbUser.dob,
			initials: dbUser.first_name.charAt(0) + (dbUser.last_name?.charAt(0) || ''),
			token: ''
		}
		const token = jwt.sign({ user }, (keys.jwtKey as string), { expiresIn: 60 * 60 * 24 })
		user.token = token
		res.status(200).send(user)
	} catch (error: any) {
		res.status(error.status ? error.status : 500).send(error.message ? error.message : 'Server side error')
	}
}

const userController = {
	createUser,
	getAllUsers,
	checkCredentials
}

export default userController

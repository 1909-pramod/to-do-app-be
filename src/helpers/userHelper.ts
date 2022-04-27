import { getUserWithEmail } from "../queries/userDbQueries";
import bcrypt from 'bcrypt'
import User from "../Models/User";

export const checkUserExistsWithCredtials = async (email: string, password: string) => {
  const user: User = await getUserWithEmail(email)
  if (user === null) {
    throw { status: 401, message: 'User with email does not exist' }
  }
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    throw { status: 403, message: 'Invalid credentials' }
  }
  return user
}
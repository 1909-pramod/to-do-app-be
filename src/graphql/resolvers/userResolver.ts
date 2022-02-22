import { getAllUserQuery, getUserWithIdQuery } from '../../queries/userDbQueries';

export class UserResolvers {
  async getAllUsers() {
    return await getAllUserQuery();
  }
  async getUserWithId(userId: number) {
    return await getUserWithIdQuery(userId);
  }
}

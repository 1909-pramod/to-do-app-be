import { TaskResolvers } from './taskResolvers';
import { UserResolvers } from './userResolver';

const taskResolvers = new TaskResolvers;
const userResolvers = new UserResolvers;
export {
  taskResolvers,
  userResolvers
}

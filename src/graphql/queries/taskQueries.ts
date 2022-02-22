import { GraphQLInt, GraphQLList } from 'graphql';
import { taskResolvers as TaskResolvers } from '../resolvers';

import { Task } from '../types/taskType';

export const TaskQueries = {
  getUserTasks: {
    type: new GraphQLList(Task),
    description: 'Get the tasks for the userId provided',
    args: {
      user_id: { type: GraphQLInt },
    },
    resolve(parent: any, args: any) {
      return TaskResolvers.getUserTask(args.user_id)
    }
  },
  getUserTaskWithTaskId: {
    type: Task,
    decription: 'Get the task with userId and taskId',
    args: {
      userId: { type: GraphQLInt },
      taskId: { type: GraphQLInt }
    },
    resolve(parent: any, args: any) {
      return TaskResolvers.getUserTaskWithTaskId(args.userId, args.taskId)
    }
  }
}

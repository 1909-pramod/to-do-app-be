import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

const otherTask = new GraphQLObjectType({
  name: 'OtherTasks',
  fields: {
    id: { type: GraphQLInt },
    task_title: { type: GraphQLString },
    task_description: { type: GraphQLString },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
    closed_date: { type: GraphQLString },
  }
})

export const Task = new GraphQLObjectType({
  name: 'GetUserTasks',
  fields: {
    id: { type: GraphQLInt },
    task_title: { type: GraphQLString },
    task_description: { type: GraphQLString },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
    closed_date: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    parent_task_id: { type: GraphQLString },
    other_tasks: { type: GraphQLList(otherTask) }
  }
})


import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const Task = new GraphQLObjectType({
  name: 'GetUserTasks',
  fields: {
    id: { type: GraphQLInt },
    task_title: { type: GraphQLString },
    task_description: { type: GraphQLString },
    start_date: { type: GraphQLString },
    end_date: { type: GraphQLString },
    status: { type: GraphQLString },
    closed_date: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    parent_task_id: { type: GraphQLString },
  }
})

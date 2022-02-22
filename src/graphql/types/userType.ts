import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

export const UserObject = new GraphQLObjectType({
  name: 'UserObject',
  fields: {
    id: { type: GraphQLInt },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    dob: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
  }
})

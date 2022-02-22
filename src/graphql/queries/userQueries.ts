import { GraphQLInt, GraphQLList } from 'graphql';
import { userResolvers as UserResolvers } from '../resolvers';

import { UserObject } from '../types/userType';

export const UserQueries = {
  getAllUsers: {
    type: new GraphQLList(UserObject),
    description: 'Get all the users',
    resolve(parent: any, args: any) {
      return UserResolvers.getAllUsers();
    }
  },
  getUserDetailsWithId: {
    type: UserObject,
    description: 'Get all the user for the ID provided',
    args: {
      userId: { type: GraphQLInt }
    },
    resolve(parent: any, args: any) {
      return UserResolvers.getUserWithId(args.userId);
    }
  }
}

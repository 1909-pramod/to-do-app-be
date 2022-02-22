import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import graphqlMutations from './mutations';
import graphqlQueries from './queries';

const RootQuery = new GraphQLObjectType({
  name: 'ServiceQuery',
  description: 'Query for api service',
  fields: graphqlQueries
})

// const RootMutation = new GraphQLObjectType({
//   name: 'ServiceMutation',
//   description: 'Mutations from api service',
//   fields: graphqlMutations
// })

const graphQLEndpoints = new GraphQLSchema({
  query: RootQuery
});

export default graphQLEndpoints;

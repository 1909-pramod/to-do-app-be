import { TaskQueries } from './taskQueries';
import { UserQueries } from './userQueries';

const graphqlQueries = {
  ...UserQueries,
  ...TaskQueries
}

export default graphqlQueries;

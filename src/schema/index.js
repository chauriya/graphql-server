import { gql } from 'apollo-server-express';

import fundSchema from './fund';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, fundSchema];

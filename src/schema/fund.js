import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    funds: [Fund!]
    fund(id: ID!): Fund
  }

  type Fund {
    id: ID!
    name: String!
    symbol: String!
    prospectusBenchmark: String!
    similarFunds: String!
  }
`;

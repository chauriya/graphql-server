import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    funds: [Fund!]
    fund(id: ID!): Fund
    benchmarks: [Benchmark!]
    benchmark(id: ID!): Benchmark
  }

  type Fund {
    id: ID!
    name: String!
    symbol: String!
    prospectusBenchmark: String!
    similarFunds: String!
  }

  type Benchmark {
    id: ID!
    name: String!
    symbol: String!
  }
`;

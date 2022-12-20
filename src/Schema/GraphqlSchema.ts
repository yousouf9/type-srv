import { gql } from "apollo-server-express";
const typeDefs = gql`
  type Tokens {
    accessToken: String
    refreshToken: String
  }
  type Mutation {
    login(username: String, password: String!): Tokens
  }
`;


export {typeDefs}
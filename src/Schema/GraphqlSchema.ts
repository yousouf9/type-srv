import { gql } from "apollo-server-express";
const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    id: String
    token: String
  }
  input RegisterInput {
    username: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Mutation {
    login(username: String, password: String!): Tokens
    registerUser(registerInput: RegisterInput): User
  }
`;

export {typeDefs}
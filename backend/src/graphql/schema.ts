import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: ID!
    email: String!
    role: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    register(email: String!, password: String!, role: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`);

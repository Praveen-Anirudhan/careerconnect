import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: ID!
    email: String!
    role: String!
  }
  
  type Job {
    id: ID!
    title: String!
    description: String!
    company: String!
    location: String!
    salary: String!
    requirements: String!
    skills: String!
    postedBy: User!
    createdAt: String!
  }

  type AuthPayload {
     token: String!
     user: User!
  }  
  
  input JobInput {
      title: String!
      description: String!
      company: String!
      location: String!
      salary: String!
      requirements: String!
      skills: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    register(email: String!, password: String!, role: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createJob(input: JobInput!): Job!
  }
`);

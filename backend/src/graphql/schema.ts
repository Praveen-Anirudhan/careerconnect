import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type User {
    id: ID!
    email: String!
    role: String!
  }
  
  enum JobType{
    FULL_TIME
    PART_TIME
    CONTRACT 
    INTERNSHIP
  }
  
  type AuthError {
    message: String!
  }
  
  type Job {
    id: ID!
    title: String!
    job_description: String!
    company: String!
    location: String!
    salary_range: String!
    job_type: JobType!
    requirements: String!
    skills: String!
    posted_by: String!
    created_at: String!
    responsibilities: String!
  }

  type AuthPayload {
     token: String!
     user: User!
     errors: [AuthError!]
  }  
  
  input JobInput {
      title: String!
      job_description: String!
      company: String!
      location: String!
      salary_range: String!
      job_type: JobType!
      requirements: String!
      skills: String!
      posted_by: String!
      responsibilities: String!
      created_at: String!
  }

  type Query {
    users: [User!]!
    getJobs: [Job!]!
  }

  type Mutation {
    register(email: String!, password: String!, role: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createJob(input: JobInput!): Job!
  }
`);

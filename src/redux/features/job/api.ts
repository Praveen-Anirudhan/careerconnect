export const POST_JOB = `
  mutation CreateJob($input: JobInput!) {
    createJob(input: $input) {
      id
      title
      company
      location
      job_type
      salary_range
      requirements
      skills
      responsibilities
      posted_by
      created_at
    }
  }
`;
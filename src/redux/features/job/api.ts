export const POST_JOB = `
  mutation PostJob($title: String!, $job_description: String!, $company: String!, $location: String!
  $salary_range: String!, $job_type: String!, $requirements: String!, $responsibilities: String!,
  $skills: String!, $posted_by: String!, $created_at: String!){
        postJob(title: $title, job_description: $job_description, company: $company, location: $location,
        salary_range: $salary_range, job_type: $job_type, requirements: $requirements,
        responsibilities: $responsibilities, skills: $skills, posted_by: $posted_by, created_at: $created_at) {
        title
        job_description
        company
        }
      }   
`;
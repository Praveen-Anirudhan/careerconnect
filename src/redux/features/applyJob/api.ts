export const APPLY_JOB_MUTATION = `
   mutation ApplyJob($jobId: String!, $firstName: String!, $lastName: String!, $email: String!, $phoneNumber: String!) {
      applyJob(jobId: $jobId, firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber) {
          jobId
          firstName
          lastName
          email
          mobileNumber
      }
   }
`;
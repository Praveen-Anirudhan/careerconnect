export const APPLY_JOB_MUTATION = `
   mutation ApplyJob($input: ApplyJob!) {
      applyJob(input: $input) {
          id
      }
   }
`;
import type { ApplyJobInput, ApplyJobResponse } from './types';
import { APPLY_JOB_MUTATION } from "./api";
import { graphqlRequest } from '../../../utils/api.ts';

export const applyJob = async (input: ApplyJobInput) => {
  const result = await graphqlRequest<{input: ApplyJobInput}, ApplyJobResponse>({
    mutation: APPLY_JOB_MUTATION,
    token: localStorage.getItem('auth_token'),
    variables: {
      input: input,
    },
  });

  return result;
}
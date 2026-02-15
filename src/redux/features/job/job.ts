import type { JobInput, PostJobResponse, GetJobResponse } from './types';
import { graphqlRequest } from '../../../utils/api';
import { POST_JOB, GET_JOBS } from './api';

export const postJob = async (input: JobInput) => {
  const result = await graphqlRequest<{ input: JobInput }, PostJobResponse>({
    mutation: POST_JOB,
    token: localStorage.getItem('auth_token'),
    variables: {
      input: input,
    },
  });

  if (result.errors) {
    throw new Error(result.errors[0]?.message || 'Job posting failed');
  }

  throw new Error('Job posting failed: No job received');
};

export const getJob = async () => {
  const result = await graphqlRequest<unknown, GetJobResponse>({
    query: GET_JOBS,
    token: localStorage.getItem('auth_token'),
  });
  if (result.errors) {
    throw new Error(result.errors[0]?.message || 'Job fetching failed');
  }
  return result;
};

import type { PostJobInput, PostJobResponse} from './types';
import {graphqlRequest} from '../../../utils/api';
import {POST_JOB} from './api';

export const postJob = async (input: PostJobInput) => {
    const result = await graphqlRequest<PostJobInput, PostJobResponse>({
        mutation: POST_JOB,
        token: localStorage.getItem('auth_token'),
        variables: input
    });

    if(result.errors){
        throw new Error(result.errors[0]?.message || "Job posting failed");
    }

    if(result?.title){
        return result?.title;
    }

    throw new Error("Job posting failed: No job received");
}
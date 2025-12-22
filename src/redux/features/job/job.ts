import type { PostJobInput, PostJobResponse} from './types';
import {graphqlRequest} from '../../../utils/api';
import {POST_JOB} from './api';

export const postJob = async ({title, company, location, salary_range, job_type, requirements, responsibilities, skills, posted_by, created_at, job_description}: PostJobInput) => {
    const result = await graphqlRequest<PostJobInput, PostJobResponse>({
        query: POST_JOB,
        variables: { title, company, location, salary_range, job_type, requirements, responsibilities, skills, posted_by, created_at, job_description },
    });

    if(result.errors){
        throw new Error(result.errors[0]?.message || "Job posting failed");
    }

    if(result?.title){
        return result?.title;
    }

    throw new Error("Job posting failed: No job received");
}
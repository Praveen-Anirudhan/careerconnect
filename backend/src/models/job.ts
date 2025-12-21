import {JobType} from '../graphql/types';

export interface Job{
    id?:string,
    title: string,
    company: string,
    location: string,
    job_type: JobType,
    salary_range: string,
    job_description: string,
    requirements: string,
    responsibilities: string,
    posted_by: string;
    created_at: string;
    skills: string;
}
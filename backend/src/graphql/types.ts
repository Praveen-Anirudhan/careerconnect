export enum JobType {
    FULL_TIME = 'FULL_TIME',
    PART_TIME = 'PART_TIME',
    CONTRACT = 'CONTRACT',
    INTERNSHIP = 'INTERNSHIP'
}

export interface JobInput {
    title: string;
    job_description: string;
    company: string;
    location: string;
    salary_range: string;
    job_type: JobType;
    requirements: string;
    skills: string;
    responsibilities: string;
    posted_by: string;
    created_at: string;
}

export interface AuthContext {
    token: string;
}

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
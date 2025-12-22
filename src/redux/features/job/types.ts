export const JobType =  {
    FULL_TIME :   'FULL_TIME',
    PART_TIME : 'PART_TIME',
    CONTRACT : 'CONTRACT',
    INTERNSHIP : 'INTERNSHIP'
}

export interface PostJobInput {
    title: string;
    job_description: string;
    company: string;
    location: string;
    salary_range: string;
    job_type: typeof JobType;
    requirements: string;
    skills: string;
    responsibilities: string;
    posted_by: string;
    created_at: string;
}

export type PostJobResponse = {
    title: string;
    job_description: string;
    company: string;
    location: string;
    salary_range: string;
    job_type: typeof JobType;
    requirements: string;
    skills: string;
    responsibilities: string;
    posted_by: string;
    created_at: string;
    errors?: Array<{ message: string }>;
};
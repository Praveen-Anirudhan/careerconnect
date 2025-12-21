export interface JobInput {
    title: string;
    job_description: string;
    company: string;
    location: string;
    salary_range: string;
    job_type: string;
    requirements: string;
    skills: string;
    responsibilities: string;
    posted_by: string;
    created_at: string;
}

export interface AuthContext {
    token: string;
}
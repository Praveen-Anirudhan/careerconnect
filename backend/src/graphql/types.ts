export interface JobInput {
    title: string;
    description: string;
    company: string;
    location: string;
    salaryRange: string;
    jobType: string;
    requirements: string;
    skills: string;
}

export interface AuthContext {
    token: string;
}
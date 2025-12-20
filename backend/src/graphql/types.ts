export interface JobInput {
    title: string;
    jobDescription: string;
    company: string;
    location: string;
    salaryRange: string;
    jobType: string;
    requirements: string;
    skills: string;
    responsibilities: string;
}

export interface AuthContext {
    token: string;
}
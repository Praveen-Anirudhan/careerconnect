export interface Job{
    id?:string,
    title: string,
    company: string,
    location: string,
    jobType: string,
    salaryRange: string,
    jobDescription: string,
    requirements: string,
    responsibilities: string,
    postedBy: string;
    createdAt?: Date;
}
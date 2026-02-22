export interface ApplyJobInput{
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface ApplyJobResponse{
  id: string;
  job: {
    id: string;
    title: string;
    company: string;
  };
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
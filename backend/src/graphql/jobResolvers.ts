import { sql } from "../db";
import { Job } from "./types";
import { verifyToken } from "../utils/auth";
import { JobInput } from "./types";
import { AuthContext } from "./types";

export const jobResolvers = {
    Query: {
       jobs: async(): Promise<Job[]> => {
           try{
               const jobs = await sql`
                    SELECT * FROM jobs
                    ORDER BY created_at DESC;
                `;
                return jobs as Job[];
           }catch(error){
               console.error("Error fetching jobs:", error);
               throw new Error("Failed to fetch jobs");
           }
       }
    },
    Mutation: {
        createJob: async (
            { input }: { input: JobInput },
            context: AuthContext
        ): Promise<Job> => {

            const user = verifyToken(context.token);
            if (!user) {
                throw new Error("Unauthorized");
            }

            const {
                title,
                job_description,
                company,
                location,
                salary_range,
                job_type,
                requirements,
                skills,
                responsibilities,
                posted_by,
                created_at
            } = input;

            try {
                const [newJob] = await sql`
                    INSERT INTO jobs (
                        title,
                        job_description,
                        company,
                        location,
                        salary_range,
                        job_type,
                        requirements,
                        responsibilities,
                        skills,
                        posted_by,
                        created_at
                    )
                    VALUES (
                               ${title},
                               ${job_description},
                               ${company},
                               ${location},
                               ${salary_range},
                               ${job_type},
                               ${requirements},
                               ${responsibilities},
                               ${skills},
                               ${posted_by},
                               ${created_at}
                           )
                        RETURNING *;
                `;

                return {
                    id: newJob.id,
                    title: newJob.title,
                    job_description: newJob.job_description,
                    company: newJob.company,
                    location: newJob.location,
                    salary_range: newJob.salary_range,
                    job_type: newJob.job_type,
                    requirements: newJob.requirements,
                    responsibilities: newJob.responsibilities,
                    skills: newJob.skills,
                    posted_by: newJob.posted_by,
                    created_at: newJob.created_at,
                };
            } catch (error) {
                console.error("Error creating job:", error);
                throw new Error("Failed to create job");
            }
        }
    }
};

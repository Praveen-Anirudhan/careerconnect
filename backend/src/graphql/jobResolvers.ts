import { sql } from "../db";
import { Job } from "../models/job";
import { verifyToken } from "../auth/auth";
import { JobInput } from "./types";
import { AuthContext } from "./types";

export const jobResolvers = {
    Mutation: {
        createJob: async (
            _parent: unknown,
            { input }: { input: JobInput },
            context: AuthContext
        ): Promise<Job> => {

            const user = verifyToken(context.token);
            if (!user) {
                throw new Error("Unauthorized");
            }

            const {
                title,
                jobDescription,
                company,
                location,
                salaryRange,
                jobType,
                requirements,
                skills,
                responsibilities
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
                        posted_by
                    )
                    VALUES (
                               ${title},
                               ${jobDescription},
                               ${company},
                               ${location},
                               ${salaryRange},
                               ${jobType},
                               ${requirements},
                               ${responsibilities},
                               ${skills},
                           )
                        RETURNING *;
                `;

                return {
                    id: newJob.id,
                    title: newJob.title,
                    jobDescription: newJob.job_description,
                    company: newJob.company,
                    location: newJob.location,
                    salaryRange: newJob.salary_range,
                    jobType: newJob.job_type,
                    requirements: newJob.requirements,
                    responsibilities: newJob.responsibilities,
                    skills: newJob.skills,
                    createdAt: newJob.created_at,
                    postedBy: newJob.posted_by
                };
            } catch (error) {
                console.error("Error creating job:", error);
                throw new Error("Failed to create job");
            }
        }
    }
};

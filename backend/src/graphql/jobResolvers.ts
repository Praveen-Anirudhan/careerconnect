import { sql } from "../db";
import { Job } from "../models/job";
import { verifyToken } from "../auth/auth";
import { JobInput } from "./types";
import { AuthContext } from "./types";

export const jobResolvers = {
    Mutation: {
        createJob: async (
            {input}: { input: JobInput },
            context: AuthContext
        ): Promise<Job> => {
            const user = verifyToken(context.token);
            if (!user) {
                throw new Error("Unauthorized");
            }

            const {title, jobDescription, company, location, salaryRange, jobType, requirements, skills} = input;
            try {
                const [newJob] = await sql`
                    INSERT INTO jobs (title,
                                      jobDescription,
                                      company,
                                      location,
                                      salaryRange,
                                      jobType,
                                      requirements,
                                      skills,
                                      posted_by)
                    VALUES (${title},
                            ${jobDescription},
                            ${company},
                            ${location},
                            ${salaryRange},
                            ${jobType},
                            ${requirements},
                            ${skills}) 
                    RETURNING * `;
            return {
                id: newJob.id,
                title: newJob.title,
                jobDescription: newJob.jobDescription,
                company: newJob.company,
                location: newJob.location,
                salaryRange: newJob.salaryRange,
                jobType: newJob.jobType,
                requirements: newJob.requirements,
                skills: newJob.skills,
                createdAt: newJob.createdAt,
                responsibilities: newJob.responsibilities,
                postedBy: newJob.postedBy,
            };
        }catch(error) {
            console.error('Error creating job:', error);
            throw new Error('Failed to create job');
             }
        }
    }
}
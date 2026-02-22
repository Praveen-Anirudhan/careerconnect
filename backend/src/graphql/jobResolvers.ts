import { sql } from '../db';
import { Job } from './types';
import { verifyToken } from '../utils/auth';
import { JobInput } from './types';
import { JwtPayload } from 'jsonwebtoken';
import { AuthContext } from './types';

export const jobResolvers = {
    getJobs: async (_args: unknown, context: AuthContext): Promise<Job[]> => {
      try{
      if (!context.token) {
        throw new Error('Unauthorized');
      }

      const user = verifyToken(context.token) as JwtPayload;
      if (!user) {
        throw new Error('Unauthorized');
      }

      const jobs = await sql`
        SELECT * 
        FROM jobs
        ORDER BY created_at DESC;
      `;

      return jobs as Job[];
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw new Error('Failed to fetch jobs');
    }
  },
  createJob: async (
    { input }: { input: JobInput },
    context: AuthContext
  ): Promise<Job> => {
    const user = verifyToken(context.token) as JwtPayload;
    const userId = user.sub as string;

    if (!userId) {
      throw new Error('Unauthorized');
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
      created_at,
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
                               ${userId},
                               ${created_at}
                           )
                        RETURNING *;
                `;
      return newJob as Job;
    } catch (error) {
      console.error('Error creating job:', error);
      throw new Error('Failed to create job');
    }
  },
};

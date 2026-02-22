import { sql } from '../db';
import { ApplyJob} from './types';

export const applyJobResolvers = {
  applyJob: async (
    { input }: { input: ApplyJob },
    context: { user: { sub: string; role?: string | null } }
  ) => {
    if (!context?.user) {
      throw new Error('Unauthorized');
    }

    const candidateId = context.user.role;

    const result = await sql`
        INSERT INTO applications (job_id, candidate_id, first_name, last_name, email, phone_number)
        VALUES (${input.jobId}, ${candidateId}, ${input.firstName}, ${input.lastName}, ${input.email}, ${input.phoneNumber})
        RETURNING *
    `;

    return result[0];
  },
};

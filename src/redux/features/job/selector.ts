import type { RootState } from '../../store';

export const getJobs = (state: RootState) => state.job.getJob;

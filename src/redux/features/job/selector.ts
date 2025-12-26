import type { RootState } from "../../store";

export const selectJob = (state: RootState) => state.job.jobs;
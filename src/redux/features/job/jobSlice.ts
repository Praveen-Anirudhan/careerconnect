import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { JobInput } from './types';
import type { JobType } from './types';

interface Job {
  id?: string;
  title: string;
  job_description: string;
  company: string;
  location: string;
  salary_range: string;
  job_type: JobType;
  requirements: string;
  responsibilities: string;
  skills: string;
  posted_by: string;
  created_at: string;
}

interface GetJob {
  title: string;
  location: string;
  salary_range: string;
  job_type: JobType;
  id: string;
}

interface JobState {
  jobs: Job | null;
  loading: boolean;
  error: string | null;
  getJob: GetJob[];
  getJobLoading: boolean;
  getJobError: string | null;
}

const initialState: JobState = {
  jobs: null,
  loading: false,
  error: null,
  getJob: [],
  getJobLoading: false,
  getJobError: null,
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        postJobRequest: (state, action: PayloadAction<JobInput>) => {
            state.loading = true;
            state.error = null;
            state.jobs = action.payload;
        },
        postJobSuccess: (state, action: PayloadAction<Job>) => {
            state.loading = false;
            state.jobs = action.payload;
            state.error = null;
        },
        postJobFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        getJobRequest:(state) => {
            state.getJobLoading = true;
            state.error = null;
        },
        getJobSuccess: (state, action: PayloadAction<GetJob[]>) => {
            state.getJobLoading = false;
            state.getJob = action.payload;
            state.getJobError = null;
        },
        getJobFailure: (state, action: PayloadAction<string>) => {
            state.getJobLoading = false;
            state.getJobError = action.payload;
        },
    }
});

export const {
  postJobRequest,
  postJobSuccess,
  postJobFailure,
  getJobRequest,
  getJobSuccess,
  getJobFailure,
} = jobSlice.actions;
export default jobSlice.reducer;

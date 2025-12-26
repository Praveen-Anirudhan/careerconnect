import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
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

interface JobState {
    jobs: Job | null;
    loading: boolean;
    error: string | null;
}

const initialState: JobState = {
    jobs: null,
    loading: false,
    error: null,
};

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        postJobRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        postJobSuccess: (state, action: PayloadAction<Job>) => {
            state.loading = false;
            state.jobs = action.payload;
            state.error = null;
        },
        postJobFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { postJobRequest, postJobSuccess, postJobFailure } = jobSlice.actions;
export default jobSlice.reducer;
import type { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from 'redux-saga/effects';
import { postJob } from './job';
import { postJobSuccess, postJobFailure } from './jobSlice';
import type {PostJobInput} from "./types.ts"; // Make sure to import these

export function* postJobSaga(action: PayloadAction<PostJobInput>): Generator {
    try {
        const response = yield call(postJob, action.payload);
        yield put(postJobSuccess(response));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        yield put(postJobFailure(errorMessage));
    }
}

export function* watchPostJob() {
    yield takeLatest('job/postJob', postJobSaga);
}
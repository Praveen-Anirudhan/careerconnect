import type { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from 'redux-saga/effects';
import { postJob } from './job';
import {postJobSuccess, postJobFailure, postJobRequest} from './jobSlice';
import type {JobInput} from "./types.ts";

export function* postJobSaga(action: PayloadAction<JobInput>): Generator {
    try {
        const response = yield call(postJob, action.payload);
        yield put(postJobSuccess(response));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        yield put(postJobFailure(errorMessage));
    }
}

export function* watchPostJob() {
    yield takeLatest(postJobRequest.type, postJobSaga);
}
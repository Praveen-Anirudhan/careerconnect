import {call, put, takeLatest} from 'redux-saga/effects';
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ApplyJobInput } from "./types";
import { applyJob } from './applyJob.ts';
import {
  applyJobSuccess,
  applyJobFailure,
  applyJobRequest,
} from './applyJobSlice.ts';

export function* handleApplyJob(
    action: PayloadAction<{input: ApplyJobInput}>
): Generator {
  try {
    const { input } = action.payload;
    const response = yield call(applyJob, input);
    yield put(applyJobSuccess(response.id));
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(applyJobFailure({error: errorMessage}));
  }
}

export function* watchApplyJob() {
  yield takeLatest(applyJobRequest.type, handleApplyJob);
}
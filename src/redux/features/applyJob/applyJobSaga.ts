import {call, put, takeLatest} from 'redux-saga/effects';
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ApplyJobInput } from "./types";
import { applyJob } from './applyJob.ts';
import {
  applyJobSuccess,
  applyJobRequest,
} from './applyJobSlice.ts';

export function* handleApplyJob(
    action: PayloadAction<ApplyJobInput>
): Generator {
  try {
    const input = action.payload;
    const response = yield call(applyJob, input);
    yield put(applyJobSuccess(response.id));
  } catch {
    //Do Nothing
  }
}

export function* watchApplyJob() {
  yield takeLatest(applyJobRequest.type, handleApplyJob);
}
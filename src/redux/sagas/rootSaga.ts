import { all, fork } from 'redux-saga/effects';
import { watchAuth } from '../features/auth/authSaga';
import { watchPostJob } from '../features/job/jobSaga';
import {watchApplyJob} from '../features/applyJob/applyJobSaga';

export default function* rootSaga() {
  yield all([fork(watchAuth), fork(watchPostJob), fork(watchApplyJob)]);
}

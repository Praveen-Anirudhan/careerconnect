import { all, fork } from 'redux-saga/effects';
import { watchAuth } from '../features/auth/authSaga';

export default function* rootSaga() {
    yield all([
        fork(watchAuth)
    ]);
}
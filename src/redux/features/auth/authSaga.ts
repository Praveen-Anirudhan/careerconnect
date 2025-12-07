import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';
import { loginUser } from '../../../services/auth';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {User} from './types'
import {setAuthToken} from '../../../services/tokenService'

export function* handleLogin(action: PayloadAction<{ email: string; password: string }>) {
    try {
        const { email, password } = action.payload;
        const response = yield call(loginUser, email, password);
        const user: User = {
            id: response?.data?.login?.user?.id,
            role: response?.data?.login?.user?.role,
            token: response?.data?.login?.token,
        }
        setAuthToken(user?.token);
        yield put(loginSuccess(user));
    } catch (error: any) {
        yield put(loginFailure(error.message));
    }
}

export function* watchAuth() {
    yield takeLatest(loginRequest.type, handleLogin);
}
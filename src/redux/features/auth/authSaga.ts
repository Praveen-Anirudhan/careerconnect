import { call, put, takeLatest } from 'redux-saga/effects';
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    signUpRequest,
    signUpSuccess,
    signUpFailure
} from './authSlice';
import { loginUser, registerUser } from '../../../services/auth';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {User} from './types'
import {setAuthToken} from '../../../services/tokenService'

export function* handleLogin(action: PayloadAction<{ email: string; password: string }>): Generator {
    try {
        const { email, password } = action.payload;
        const response = yield call(loginUser, {email, password});
        const user: User = {
            id: response?.data?.login?.user?.id,
            role: response?.data?.login?.user?.role,
            token: response?.data?.login?.token,
        }
        setAuthToken(user?.token);
        yield put(loginSuccess(user));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        yield put(loginFailure(errorMessage));
    }
}

export function* handleSignUp(action: PayloadAction<{ email: string; password: string, role: string }>): Generator{
    try {
        const {email, password, role} = action.payload;
        const response = yield call(registerUser, {email, password, role});
        const user: User = {
            id: response?.user?.id,
            role: response?.user?.role,
            token: response?.token,
        }
        setAuthToken(user?.token);
        yield put(signUpSuccess(user));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        yield put(signUpFailure(errorMessage));
    }
}

export function* handleLogout() {
    try {
        yield put(logout());
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        yield put(loginFailure(errorMessage));
    }
}

export function* watchAuth() {
    yield takeLatest(loginRequest.type, handleLogin);
    yield takeLatest(signUpRequest.type, handleSignUp);
}
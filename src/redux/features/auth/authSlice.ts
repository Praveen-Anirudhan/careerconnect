import type { AuthState, User } from './types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    email: null,
    password: null,
    role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state, action: PayloadAction<{email: string, password: string}>) => {
            state.loading = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        signUpRequest: (state, action: PayloadAction<{email:string, password: string, role: string}>) => {
            state.loading = true;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.role = action.payload.role;
            state.error = null;
        },
        signUpSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        signUpFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },


});

export const { loginRequest, loginSuccess, loginFailure, signUpRequest, signUpSuccess, signUpFailure } = authSlice.actions;
export default authSlice.reducer;
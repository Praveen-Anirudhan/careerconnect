import type { AuthState, User } from './types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    email: null,
    password: null,
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
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
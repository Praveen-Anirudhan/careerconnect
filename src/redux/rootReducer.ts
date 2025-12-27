import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import jobReducer from './features/job/jobSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    job: jobReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import jobReducer from './features/job/jobSlice';
import applyJobReducer from './features/applyJob/applyJobSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
  applyJob: applyJobReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

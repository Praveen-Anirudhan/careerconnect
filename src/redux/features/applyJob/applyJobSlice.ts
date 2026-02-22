import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  jobId: '',
}

const applyJobSlice = createSlice({
  name: 'applyJob',
  initialState,
  reducers: {
    applyJobRequest: (
      state,
      action: PayloadAction<{jobId: string; firstName: string; lastName: string; email: string; phoneNumber: string}>
    ) => {
      state.loading = true;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
    },
    applyJobSuccess: (
      state,
      action: PayloadAction<{jobId: string; firstName: string; lastName: string; email: string; phoneNumber: string}>
    ) => {
      state.loading = false;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
    },
    applyJobFailure: (
      state,
    ) => {
      state.loading = false;
    }
  }
})

export const {applyJobRequest, applyJobSuccess, applyJobFailure} = applyJobSlice.actions;
export default applyJobSlice.reducer;

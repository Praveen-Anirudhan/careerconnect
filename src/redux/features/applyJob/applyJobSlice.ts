import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
}

const applyJobSlice = createSlice({
  name: 'applyJob',
  initialState,
  reducers: {
    applyJobRequest: (
      state,
      action: PayloadAction<{firstName: string; lastName: string; email: string; phoneNumber: string; error: string}>
    ) => {
      state.loading = true;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.error = action.payload.error;
    },
    applyJobSuccess: (
      state,
      action: PayloadAction<{firstName: string; lastName: string; email: string; phoneNumber: string; error: string}>
    ) => {
      state.loading = false;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.error = action.payload.error;
    },
    applyJobFailure: (
      state,
      action: PayloadAction<{ error: string }>
    ) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
})

export const {applyJobRequest, applyJobSuccess, applyJobFailure} = applyJobSlice.actions;
export default applyJobSlice.reducer;

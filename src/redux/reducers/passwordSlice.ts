import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chuckApi } from "../api/chuckApi";
import { request, measureAPI } from "../api/request";
import { RootState } from "../store";

export const sendEmail = createAsyncThunk(
  "password/sendEmail",
  async (arg: any) => {
    let t0 = performance.now();
    const endPoint = "users/sendEmailCode";
    const response = await request({ arg, endPoint });
    measureAPI({ type: "password/sendEmail", t0, t1: performance.now() });
    return response;
  }
);

export const checkCode = createAsyncThunk(
  "password/checkCode",
  async (arg: any) => {
    let t0 = performance.now();
    const endPoint = "users/checkEmailCode";
    const response = await request({ arg, endPoint });
    measureAPI({ type: "password/checkCode", t0, t1: performance.now() });
    return response;
  }
);

export const updatePassword = createAsyncThunk(
  "password/updatePassword",
  async (arg: any) => {
    let t0 = performance.now();
    const endPoint = "users/updatePassword";
    const response = await request({ arg, endPoint });
    measureAPI({ type: "password/updatePassword", t0, t1: performance.now() });
    return response;
  }
);

export interface routeState {
  emailSending: boolean;
  emailValid: null | boolean;
  emailError: any;

  codeSending: boolean;
  codeValid: null | boolean;
  codeError: any;

  passwordSending: boolean;
  passwordValid: null | boolean;
  passwordError: any;
}

const initialState: routeState = {
  emailSending: false,
  emailError: null,
  emailValid: null,

  codeSending: false,
  codeError: null,
  codeValid: null,

  passwordSending: false,
  passwordError: null,
  passwordValid: null,
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    reset: (state) => {
      state.emailSending = false;
      state.emailError = null;
      state.emailValid = null;

      state.codeSending = false;
      state.codeError = null;
      state.codeValid = null;

      state.passwordSending = false;
      state.passwordError = null;
      state.passwordValid = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.emailSending = true;
        state.emailError = null;
        state.emailValid = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.emailSending = false;
        state.emailValid = true;
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.emailSending = false;
        state.emailError = action.error;
      });
    builder
      .addCase(checkCode.pending, (state) => {
        state.codeSending = true;
        state.codeError = null;
        state.codeValid = null;
      })
      .addCase(checkCode.fulfilled, (state, action) => {
        state.codeSending = false;
        state.codeValid = true;
      })
      .addCase(checkCode.rejected, (state, action) => {
        state.codeSending = false;
        state.codeError = action.error;
      });
    builder
      .addCase(updatePassword.pending, (state) => {
        state.passwordSending = true;
        state.passwordError = null;
        state.passwordValid = null;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.passwordSending = false;
        state.passwordValid = true;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.passwordSending = false;
        state.passwordError = action.error;
      });
  },
});

export const { reset } = passwordSlice.actions;

export const passwordData = (state: RootState) => ({
  state: state.password,
});

export const passwordEmailData = (state: RootState) => ({
  emailSending: state.password.emailSending,
  emailValid: state.password.emailValid,
  emailError: state.password.emailError,
});

export const passwordCodeData = (state: RootState) => ({
  codeSending: state.password.codeSending,
  codeValid: state.password.codeValid,
  codeError: state.password.codeError,
});

export const passwordResetData = (state: RootState) => ({
  passwordSending: state.password.passwordSending,
  passwordValid: state.password.passwordValid,
  passwordError: state.password.passwordError,
});

export default passwordSlice.reducer;

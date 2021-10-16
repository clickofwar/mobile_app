import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chuckApi } from "../api/chuckApi";
import { request } from "../api/request";
import { RootState } from "../store";

export const userLogin = createAsyncThunk(
  "user/login",
  async (arg: any, { getState, dispatch }) => {
    //const state = getState();
    const endPoint = "users/find";
    const response = await request({ arg, endPoint });

    console.log({ response });
    return response;
  }
);

export const userSignup = createAsyncThunk(
  "user/signup",
  async (arg: any, { getState, dispatch }) => {
    //const state = getState();
    const endPoint = "users/add";
    const response = await request({ arg, endPoint });

    console.log({ response });
    return response;
  }
);

export interface routeState {
  data: any;
  email: string;
  username: string;
  token: string;

  loginIsLoading: boolean;
  loginError: any;

  signupIsLoading: boolean;
  signupError: any;
}

const initialState: routeState = {
  data: null,
  email: "",
  username: "",
  token: "",

  loginIsLoading: false,
  loginError: null,

  signupIsLoading: false,
  signupError: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.email = "";
      state.username = "";
      state.data = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loginIsLoading = true;
        state.loginError = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loginIsLoading = false;
        state.data = action.payload.data;
        state.email = action.payload.data.email;
        state.token = action.payload.data.token;
        state.username = action.payload.data.username;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loginIsLoading = false;
        state.data = null;
        state.loginError = action.error;
      });
    builder
      .addCase(userSignup.pending, (state) => {
        state.signupIsLoading = true;
        state.signupError = null;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.signupIsLoading = false;
        state.data = action.payload.data;
        state.email = action.payload.data.email;
        state.token = action.payload.data.token;
        state.username = action.payload.data.username;
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.signupIsLoading = false;
        state.data = null;
        state.signupError = action.error;
      });
  },
});

export const { logout } = userSlice.actions;

export const userLoginData = (state: RootState) => ({
  isLoading: state.user.loginIsLoading,
  error: state.user.loginError,
});

export const userSignupData = (state: RootState) => ({
  isLoading: state.user.signupIsLoading,
  error: state.user.signupError,
});

export const userData = (state: RootState) => ({
  token: state.user.token,
  email: state.user.email,
  username: state.user.username,
  data: state.user.data,
});

export default userSlice.reducer;

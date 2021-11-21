import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, measureAPI, requestAuthorized } from "../api/request";
import { RootState } from "../store";

interface loginProps {
  email: string;
  password: string;
}

interface signupProps {
  email: string;
  password: string;
  username: string;
}

export const userLogin = createAsyncThunk(
  "user/login",
  async (arg: loginProps) => {
    let t0 = performance.now();
    const endPoint = "users/find";
    const response = await request({ arg, endPoint });
    measureAPI({ type: "user/login", t0, t1: performance.now() });
    return response;
  }
);

export const userSignup = createAsyncThunk(
  "user/signup",
  async (arg: signupProps) => {
    let t0 = performance.now();
    const endPoint = "users/add";
    const response = await request({ arg, endPoint });
    measureAPI({ type: "user/signup", t0, t1: performance.now() });

    return response;
  }
);

export const userSetNotificationId = createAsyncThunk(
  "user/setNotificationId",
  async (_, { getState }) => {
    let state: any = getState();
    let { email, notificationId } = state?.user;

    if (notificationId && email) {
      let t0 = performance.now();
      const endPoint = "users/setNotificationId";
      const response = await requestAuthorized({
        arg: { email, notificationId },
        endPoint,
        state,
      });
      measureAPI({
        type: "users/setNotificationId",
        t0,
        t1: performance.now(),
      });
      return response;
    } else {
      return null;
    }
  }
);

export interface routeState {
  data: any;
  email: string;
  username: string;
  token: string;
  notificationId: string;
  score: any;

  loginIsLoading: boolean;
  loginError: any;

  signupIsLoading: boolean;
  signupError: any;

  idIsLoading: boolean;
  idError: any;
}

const initialState: routeState = {
  data: null,
  email: "",
  username: "",
  token: "",
  notificationId: "",
  score: {
    lightScore: 0,
    darkScore: 0,
    score: 0,
  },

  loginIsLoading: false,
  loginError: null,

  signupIsLoading: false,
  signupError: null,

  idIsLoading: false,
  idError: null,
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
      state.score = {
        lightScore: 0,
        darkScore: 0,
        score: 0,
      };
    },
    setPushNotificationId: (state, action) => {
      state.notificationId = action.payload;
    },
    updateUserScore: (state, action: any) => {
      state.score = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loginIsLoading = true;
        state.loginError = null;
      })
      .addCase(userLogin.fulfilled, (state, action: any) => {
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
      .addCase(userSignup.fulfilled, (state, action: any) => {
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
    builder
      .addCase(userSetNotificationId.pending, (state) => {
        state.idIsLoading = true;
        state.idError = null;
      })
      .addCase(userSetNotificationId.fulfilled, (state) => {
        state.idIsLoading = false;
        state.idError = null;
      })
      .addCase(userSetNotificationId.rejected, (state, action) => {
        state.idIsLoading = false;
        state.idError = action.error;
      });
  },
});

export const { logout, setPushNotificationId, updateUserScore } =
  userSlice.actions;

export const stateData = (state: RootState) => ({
  state: state,
});

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

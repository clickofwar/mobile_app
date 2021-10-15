import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chuckApi } from "../api/chuckApi";
import { RootState } from "../store";

export const userLogin = createAsyncThunk(
  "user/login",
  async (arg: any, { getState, dispatch }) => {
    console.log("sup dude");
    const state = getState();
    const res = await chuckApi(arg);

    const { value } = res.data;

    return value;
  }
);

export interface routeState {
  value: number;
  isLoading: boolean;
  data: any;
  error: any;
  email: string;
  username: string;
}

const initialState: routeState = {
  value: 0,
  isLoading: false,
  data: null,
  error: null,
  email: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.payload;
      });
  },
});

export const routeData = (state: RootState) => ({
  isLoading: state.user.isLoading,
  data: state.user.data,
  error: state.user.error,
  email: state.user.email,
});

export default userSlice.reducer;

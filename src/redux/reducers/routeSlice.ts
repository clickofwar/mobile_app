import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chuckApi } from "../api/chuckApi";
import { RootState } from "../store";

export const fetchChuckNorris = createAsyncThunk(
  "get/fetchChuckNorris",
  async (arg: any, { getState, dispatch }) => {
    const state = getState();
    const res = await chuckApi(arg);

    return res.data.value;
  }
);

export interface routeState {
  value: number;
  isLoading: boolean;
  data: any;
  error: any;
}

const initialState: routeState = {
  value: 0,
  isLoading: false,
  data: null,
  error: null,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChuckNorris.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchChuckNorris.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchChuckNorris.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.payload;
      });
  },
});

export const routeData = (state: RootState) => state;

export default routeSlice.reducer;

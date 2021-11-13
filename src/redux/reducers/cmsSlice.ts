import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../firebase";
import { measureAPI } from "../api/request";
import { RootState } from "../store";
import { updateCMS } from "./modalSlice";

export const getCMS = createAsyncThunk(
  "get/CMS",
  async (_, { dispatch, getState }) => {
    let state: any = getState();
    let t0 = performance.now();
    const snapshot = await db.ref().once("value");
    const value = snapshot.val();
    measureAPI({ type: "get/cms", t0, t1: performance.now() });

    dispatch(updateCMS({ value, currentVersion: state.modal.version }));
    return value;
  }
);

export interface routeState {
  data: any;
  isLoading: boolean;
  error: any;
}

const initialState: routeState = {
  data: null,
  isLoading: false,
  error: null,
};

export const cmsSlice = createSlice({
  name: "cms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCMS.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCMS.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getCMS.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error;
      });
  },
});

export const cmsData = (state: RootState) => ({
  data: state.cms.data,
  error: state.cms.error,
  isLoading: state.cms.isLoading,
});

export default cmsSlice.reducer;

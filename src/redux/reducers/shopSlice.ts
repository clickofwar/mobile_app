import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, measureAPI, requestAuthorized } from "../api/request";
import { RootState } from "../store";

export interface routeState {
  isOpened: boolean;
}

const initialState: routeState = {
  isOpened: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpened = true;
    },
    close: (state) => {
      state.isOpened = false;
    },
  },
});

export const { open, close } = shopSlice.actions;

export const shopData = (state: RootState) => ({
  isOpened: state.shop.isOpened,
});

export default shopSlice.reducer;

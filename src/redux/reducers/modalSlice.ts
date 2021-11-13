import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface routeState {
  data: any;
  isShowing: any;
  dataCMS: any;
  version: string;
  isShowingCMS: boolean;
}

const initialState: routeState = {
  data: null,
  isShowing: false,
  dataCMS: null,
  version: "",
  isShowingCMS: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateCMS: (state, action) => {
      const { currentVersion } = action?.payload;
      const newVersion = action.payload?.value?.modal?.version;

      if (newVersion !== currentVersion) {
        state.isShowingCMS = true;
      }

      state.dataCMS = action.payload?.value?.modal;
      state.version = action.payload?.value?.modal?.version;
    },
    update: (state, action) => {
      state.data = action.payload?.data;
      state.isShowing = true;
    },
    closeCMS: (state) => {
      state.isShowingCMS = false;
    },
    close: (state) => {
      state.isShowing = false;
      state.data = null;
    },
  },
});

export const { updateCMS, update, closeCMS, close } = modalSlice.actions;

export const modalCMSData = (state: RootState) => ({
  isShowingCMS: state.modal.isShowingCMS,
  dataCMS: state.modal.dataCMS,
});

export const modalData = (state: RootState) => ({
  isShowing: state.modal.isShowing,
  data: state.modal.data,
});

export default modalSlice.reducer;

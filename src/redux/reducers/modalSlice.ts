import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface routeState {
  data: any;
  version: string;
  isShowing: boolean;
}

const initialState: routeState = {
  data: null,
  version: "",
  isShowing: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    update: (state, action) => {
      const { currentVersion } = action?.payload;
      const newVersion = action.payload?.value?.modal?.version;

      if (newVersion !== currentVersion) {
        state.isShowing = true;
      }

      state.data = action.payload?.value?.modal;
      state.version = action.payload?.value?.modal?.version;
    },
    close: (state) => {
      state.isShowing = false;
    },
  },
});

export const { update, close } = modalSlice.actions;

export const modalData = (state: RootState) => ({
  isShowing: state.modal.isShowing,
  data: state.modal.data,
});

export default modalSlice.reducer;

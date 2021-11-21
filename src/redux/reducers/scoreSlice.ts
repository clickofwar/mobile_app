import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, measureAPI, requestAuthorized } from "../api/request";
import { RootState } from "../store";

export const sendStreamScore = createAsyncThunk(
  "send/liveScore",
  async (arg: any, { getState }) => {
    let state: any = getState();
    let t0 = performance.now();
    arg.username = state.user.username;
    const endPoint = "score/updateLiveScore";
    const response = await requestAuthorized({ arg, endPoint, state });
    measureAPI({ type: "score/updateLiveScore", t0, t1: performance.now() });

    return response.data;
  }
);

export interface routeState {
  score: number;
  liveScore: number;
  liveStreamdata: any;
  liveStreamIsLoading: boolean;
  liveStreamError: any;
}

const initialState: routeState = {
  score: 0,
  liveScore: 0,
  liveStreamdata: null,
  liveStreamIsLoading: false,
  liveStreamError: null,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    updateLiveScore: (state, action) => {
      state.liveScore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendStreamScore.pending, (state) => {
        state.liveStreamIsLoading = true;
        state.liveStreamError = null;
      })
      .addCase(sendStreamScore.fulfilled, (state, action) => {
        state.liveStreamIsLoading = false;
        state.liveStreamdata = action.payload;
      })
      .addCase(sendStreamScore.rejected, (state, action) => {
        state.liveStreamIsLoading = false;
        state.liveStreamError = action.error;
      });
  },
});

export const { updateLiveScore } = scoreSlice.actions;

export const liveScoreData = (state: RootState) => ({
  data: state.score.liveStreamdata,
  error: state.score.liveStreamError,
  isLoading: state.score.liveStreamIsLoading,
});

export const scoreData = (state: RootState) => ({
  liveScore: state.score?.liveScore,
  liveStreamScore: state.score?.liveStreamdata?.score,
  score: state.score?.score,
});

export default scoreSlice.reducer;

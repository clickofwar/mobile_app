import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request, measureAPI, requestAuthorized } from "../api/request";
import { RootState } from "../store";
import { updateUserScore } from "../reducers/userSlice";

export const sendStreamScore = createAsyncThunk(
  "send/liveScore",
  async (arg: any, { getState }) => {
    let state: any = getState();
    let t0 = performance.now();
    arg.username = state.user.username;
    const endPoint = "score/updateLiveScore";
    console.log({ arg });
    const response = await requestAuthorized({ arg, endPoint, state });
    measureAPI({ type: "score/updateLiveScore", t0, t1: performance.now() });

    return response.data;
  }
);

export const getUpdatedScore = createAsyncThunk(
  "getUpdatedScore",
  async (_, { getState, dispatch }) => {
    let state: any = getState();
    let t0 = performance.now();
    let username = state.user.username;

    const endPoint = "score/get";
    const response: any = await requestAuthorized({
      arg: { username },
      endPoint,
      state,
    });
    measureAPI({ type: "score/get", t0, t1: performance.now() });

    if (response?.data?.user) {
      dispatch(updateUserScore(response?.data?.user));
    }
    return response.data;
  }
);

export const sendUpdatedScore = createAsyncThunk(
  "sendUpdatedScore",
  async (arg: any, { getState, dispatch }) => {
    let state: any = getState();
    let t0 = performance.now();
    arg.username = state.user.username;
    arg.team = "light";
    if (arg.score < 0) {
      arg.team = "dark";
    }
    const endPoint = "score/add";
    console.log({ arg });
    const response: any = await requestAuthorized({ arg, endPoint, state });
    measureAPI({ type: "score/add", t0, t1: performance.now() });

    if (response?.data?.user) {
      dispatch(updateUserScore(response?.data?.user));
    }
    return response.data;
  }
);

export interface routeState {
  score: number;
  lightScore: number;
  darkScore: number;
  scoreData: any;
  scoreIsLoading: boolean;
  scoreError: any;
  liveScore: number;
  liveStreamdata: any;
  liveStreamIsLoading: boolean;
  liveStreamError: any;
}

const initialState: routeState = {
  score: 0,
  lightScore: 0,
  darkScore: 0,
  scoreData: null,
  scoreIsLoading: false,
  scoreError: null,
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
    builder
      .addCase(sendUpdatedScore.pending, (state) => {
        state.scoreIsLoading = true;
        state.scoreError = null;
      })
      .addCase(sendUpdatedScore.fulfilled, (state, action: any) => {
        state.scoreIsLoading = false;
        state.scoreData = action.payload;
        state.score = action?.payload?.score;
        state.lightScore = action?.payload?.lightScore;
        state.darkScore = action?.payload?.darkScore;
      })
      .addCase(sendUpdatedScore.rejected, (state, action: any) => {
        state.scoreIsLoading = false;
        state.scoreError = action.error;
      });
    builder
      .addCase(getUpdatedScore.pending, (state) => {
        state.scoreIsLoading = true;
        state.scoreError = null;
      })
      .addCase(getUpdatedScore.fulfilled, (state, action: any) => {
        state.scoreIsLoading = false;
        state.scoreData = action.payload;
        state.score = action?.payload?.score;
        state.lightScore = action?.payload?.lightScore;
        state.darkScore = action?.payload?.darkScore;
      })
      .addCase(getUpdatedScore.rejected, (state, action: any) => {
        state.scoreIsLoading = false;
        state.scoreError = action.error;
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

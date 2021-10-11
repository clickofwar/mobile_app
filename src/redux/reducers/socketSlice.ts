import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SocketState {
  data: [];
}

const initialState: SocketState = {
  data: [],
};


export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    update: (state, action: PayloadAction<[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload;
    },
    decrement: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
  },
});

export const { update, decrement, incrementByAmount } = socketSlice.actions;

export const socketData = (state: RootState) => state.socket.data;

export default socketSlice.reducer;

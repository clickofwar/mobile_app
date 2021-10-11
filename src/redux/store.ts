import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import routeReducer from "./reducers/routeSlice";
import socketSlice from "./reducers/socketSlice";

const loggingMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("Redux Type ==> ", action.type);
  console.log("Redux Payload ==> ", action.payload);
  next(action);
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    route: routeReducer,
    socket: socketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

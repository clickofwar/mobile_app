import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import counterReducer from "./reducers/counterSlice";
import routeReducer from "./reducers/routeSlice";
import socketSlice from "./reducers/socketSlice";
import userSlice from "./reducers/userSlice";
import { loggingMiddleware } from "./middleware/index";
import cmsSlice from "./reducers/cmsSlice";
import passwordSlice from "./reducers/passwordSlice";

const reducers = combineReducers({
  counter: counterReducer,
  route: routeReducer,
  socket: socketSlice,
  user: userSlice,
  cms: cmsSlice,
  password: passwordSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"], // only [] will be persisted
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggingMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

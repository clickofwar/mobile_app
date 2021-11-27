import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userSlice from "./reducers/userSlice";
import { loggingMiddleware } from "./middleware/index";
import cmsSlice from "./reducers/cmsSlice";
import passwordSlice from "./reducers/passwordSlice";
import modalSlice from "./reducers/modalSlice";
import scoreSlice from "./reducers/scoreSlice";
import shopSlice from "./reducers/shopSlice";

const reducers = combineReducers({
  user: userSlice,
  cms: cmsSlice,
  password: passwordSlice,
  modal: modalSlice,
  score: scoreSlice,
  shop: shopSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user", "modal", "cms"], // only [] will be persisted
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

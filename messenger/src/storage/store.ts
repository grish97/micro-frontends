import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sourceApi } from "./services/sourceApi";
import authReducer from "storage/slices/authSlice";

export const reducers = combineReducers({
  [sourceApi.reducerPath]: sourceApi.reducer,
  auth: authReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sourceApi.middleware)
});

import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./slices/memberSlice";

const store = configureStore({
  reducer: {
    member: memberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

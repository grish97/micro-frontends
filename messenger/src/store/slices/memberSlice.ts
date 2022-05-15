import { createSlice } from "@reduxjs/toolkit";
import { TMemberState } from "@store";

const initialState: TMemberState = {
  members: [
    {
      id: "15",
      email: "a@user.com",
      username: "grish97",
    },
    {
      id: "18",
      email: "a@user.com",
      username: "grish97",
    },
    {
      id: "95",
      email: "a@user.com",
      username: "grish97",
    },
  ],
};

export const memberSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setMember: (state: TMemberState, action) => {
      return { ...state, ...action.payload };
    },
    resetMemeber: (state: TMemberState) => {
      return initialState;
    },
  },
});

export const { setMember, resetMemeber } = memberSlice.actions;

export default memberSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isHost: false,
    isTenant: false,
  },
  reducers: {
    userIsHost: (state) => {
      state.isHost = true;
    },
    userIsTenant: (state) => {
      state.isTenant = true;
    },
  },
});

export const { userIsHost, userIsTenant } = appSlice.actions;

export const appReducer = appSlice.reducer;

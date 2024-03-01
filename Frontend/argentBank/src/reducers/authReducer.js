import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.username = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.username = "";
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const { actions, reducer } = authSlice;

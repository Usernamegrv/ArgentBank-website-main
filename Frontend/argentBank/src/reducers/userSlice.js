// import {create slice}
// store
// cretae async thunk

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { store } from "./store";
import axios from "axios";

const initialState = {
  token: sessionStorage.getItem("token") || null,
  isLoggedIn: sessionStorage.getItem("token") ? true : false,
  currentUser: {},
  error: null,
};

export const login = createAsyncThunk("userSlice/login", async (userData) => {
  const { data } = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    userData
  );
  // console.log(data.body)
  return data.body;
});

const usersSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      sessionStorage.clear();
      state.isLoggedIn = false;
      state.currentUser = {};
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      sessionStorage.setItem("token", action.payload.token);
      state.error = null;
      state.isLoggedIn = true;
    });

    builder.addCase(login.rejected, (state, action) => {
      sessionStorage.clear();
      state.error = action.error.message;
      console.log(state.error);
      state.isLoggedIn = false;
    });
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;

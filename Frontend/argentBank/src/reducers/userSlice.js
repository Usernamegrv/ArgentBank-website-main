import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  token: sessionStorage.getItem("token") || null,
  isLoggedIn: sessionStorage.getItem("token") ? true : false,
  currentUser: {},
  newUserName: "",
  error: null,
};

export const login = createAsyncThunk("userSlice/login", async (userData) => {
  const { data } = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    userData
  );
  return data.body;
});

export const getProfile = createAsyncThunk("userSlice/getProfile", async () => {
  const token = usersSlice.getInitialState().token;
  // console.log("test");
  const { data } = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    { token },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log("data body:", data.body);
  return data.body;
});

export const updateProfile = createAsyncThunk(
  "userSlice/updateProfile",
  async () => {
    const token = usersSlice.getInitialState().token;
    console.log("test");
    const { data } = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { token },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("update profile", data.body);
    return data.body;
  }
);

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

    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      console.log(state.currentUser);
    });

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.newUserName = action.payload;
      console.log(state.newUserName);
    });
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
  return data.body;
});

export const getProfile = createAsyncThunk(
  "userSlice/getProfile",
  async (token) => {
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
    sessionStorage.setItem("currentUser", JSON.stringify(data.body));
    return data.body;
  }
);

export const setUserName = createAsyncThunk(
  "userSlice/setUserName",
  async (newUserName, { getState }) => {
    const token = getState().userReducer.token;
    try {
      const { data } = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName: newUserName, token },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.userName;
    } catch (error) {
      console.log(error);
      throw error;
    }
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
    });
    builder.addCase(setUserName.fulfilled, (state, action) => {
      state.currentUser.userName = action.payload;
    });
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;

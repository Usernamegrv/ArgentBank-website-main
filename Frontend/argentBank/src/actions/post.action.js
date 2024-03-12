import axios from "axios";
import { setToken } from "./user.action.js";
export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3001/api/v1/user/login", {
        email,
        password,
      });
      console.log(res);
      if (res.data.status === 200) {
        localStorage.setItem("token", res.data.token);
        dispatch(setToken(res.data.token));
        dispatch({ type: LOGIN_USER, payload: res.data });
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Une erreur est survenue:", error);
    }
  };
};

import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";

export const loginUser = (email, password) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", { email, password })
      .then((res) => {
        dispatch({ type: LOGIN_USER, payload: res.data });
      });
  };
};

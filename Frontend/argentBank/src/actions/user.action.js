export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_TOKEN = "SET_TOKEN";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const setToken = (token) => {
  console.log("Token from setToken action :", token);
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setAuthenticated = (isAuthenticated) => {
  return {
    type: SET_AUTHENTICATED,
    payload: isAuthenticated,
  };
};

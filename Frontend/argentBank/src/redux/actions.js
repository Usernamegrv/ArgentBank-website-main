import {
  getUserProfil,
  postFormData,
  postUser,
  updateUserName,
} from "./utils/apiCalls.js";

export const GET_EMAIL = "GET_EMAIL";
export const GET_PASSWORD = "GET_PASSWORD";
export const GET_TOKEN = "Get user token";
export const SAVE_EMAIL = "Save user email";
export const SAVE_PASSWORD = "Save user password";
export const LOGIN = "Login";
export const LOGOUT = "Logout";
export const GET_FIRST_NAME = "Get user first name";
export const GET_LAST_NAME = "Get user last name";
export const EDIT_PROFIL = "Edit user profil";
export const GET_NEW_USER_NAME = "Get new user name";
export const SAVE_NEW_USER_NAME = "Save new user name";
export const REMEMBER_ME = "Remember me";

export const getEmail = (email) => {
  return {
    type: GET_EMAIL,
    payload: email,
  };
};

export const getPassword = (password) => {
  return {
    type: GET_PASSWORD,
    payload: password,
  };
};

export const getToken = (token) => {
  return {
    type: GET_TOKEN,
    payload: token,
  };
};

export const saveEmail = (email) => {
  return {
    type: SAVE_EMAIL,
    payload: email,
  };
};

export const savePassword = (password) => {
  return {
    type: SAVE_PASSWORD,
    payload: password,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const getFirstName = (firstName) => {
  return {
    type: GET_FIRST_NAME,
    payload: firstName,
  };
};

export const getLastName = (lastName) => {
  return {
    type: GET_LAST_NAME,
    payload: lastName,
  };
};

export const editProfil = () => {
  return {
    type: EDIT_PROFIL,
  };
};

export const getNewUserName = (userName) => {
  return {
    type: GET_NEW_USER_NAME,
    payload: userName,
  };
};

export const saveNewUserName = (userName) => {
  return {
    type: SAVE_NEW_USER_NAME,
    payload: userName,
  };
};

export const rememberMe = () => {
  return {
    type: REMEMBER_ME,
  };
};

export const loginAction = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await postFormData(email, password);
      if (response !== "error") {
        const token = localStorage.getItem("token");
        const userProfile = await getUserProfil(token);
        if (userProfile !== "not found") {
          dispatch(login());
          dispatch(getFirstName(userProfile.firstName));
          dispatch(getLastName(userProfile.lastName));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUserAction = (
  email,
  password,
  firstName,
  lastName,
  userName
) => {
  return async (dispatch) => {
    try {
      const response = await postUser(
        email,
        password,
        firstName,
        lastName,
        userName
      );
      if (response) {
        dispatch(saveEmail(email));
        dispatch(savePassword(password));
        dispatch(getFirstName(firstName));
        dispatch(getLastName(lastName));
        dispatch(saveNewUserName(userName));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUserNameAction = (firstName, lastName) => {
  return async (dispatch) => {
    try {
      const response = await updateUserName(firstName, lastName);
      if (response) {
        dispatch(getFirstName(firstName));
        dispatch(getLastName(lastName));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

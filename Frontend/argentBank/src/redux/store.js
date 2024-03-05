import {
  GET_EMAIL,
  GET_PASSWORD,
  LOGIN,
  LOGOUT,
  GET_FIRST_NAME,
  GET_LAST_NAME,
  GET_NEW_USER_NAME,
  EDIT_PROFIL,
} from "./actions";

const initialState = {
  email: "",
  password: "",
  isAuthenticated: false,
  firstName: "",
  lastName: "",
  newUserName: "",
  profilEditing: false,
};

// Reducers

export function reducer(state = initialState, action) {
  if (action.type === GET_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === GET_PASSWORD) {
    return {
      ...state,
      password: action.payload,
    };
  }
  if (action.type === LOGIN) {
    return {
      ...state,
      isAuthenticated: true,
    };
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      isAuthenticated: false,
    };
  }
  if (action.type === GET_FIRST_NAME) {
    return {
      ...state,
      firstName: action.payload,
    };
  }
  if (action.type === GET_LAST_NAME) {
    return {
      ...state,
      lastName: action.payload,
    };
  }
  if (action.type === GET_NEW_USER_NAME) {
    return {
      ...state,
      newUserName: action.payload,
    };
  }
  if (action.type === EDIT_PROFIL) {
    return {
      ...state,
      profilEditing: true,
    };
  }
  return state;
}

export const { store } = reducer;

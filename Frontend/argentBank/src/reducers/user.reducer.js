import { LOGIN_USER } from "../actions/post.action.js";
import { SET_EMAIL, SET_PASSWORD, SET_TOKEN } from "../actions/user.action.js";

const initialState = {
  user: null,
  email: "",
  password: "",
  token: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

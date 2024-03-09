import { LOGIN_USER } from "../actions/post.action.js";
import { SET_EMAIL, SET_PASSWORD } from "../actions/user.action.js";

const initialState = { user: null, email: "", password: "" };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

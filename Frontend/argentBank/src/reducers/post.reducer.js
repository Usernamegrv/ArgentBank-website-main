import { LOGIN_USER } from "../actions/post.action.js";

const initialState = { isAuthenticated: false };

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}

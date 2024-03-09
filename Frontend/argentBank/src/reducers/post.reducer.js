import { LOGIN_USER } from "../actions/post.action.js";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
}

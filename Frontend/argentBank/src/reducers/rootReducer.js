import { combineReducers } from "redux";
import { reducer as authReducer } from "./authReducer";
import { reducer as userReducer } from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;

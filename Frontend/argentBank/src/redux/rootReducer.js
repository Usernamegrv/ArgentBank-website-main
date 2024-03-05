import { combineReducers } from "redux";
import { reducer as storeReducer } from "./store.js";

const rootReducer = combineReducers({
  store: storeReducer,
});

export default rootReducer;

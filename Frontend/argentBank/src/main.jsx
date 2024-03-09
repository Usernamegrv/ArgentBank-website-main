import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { loginUser } from "./actions/post.action.js";

// const initialState = {
//     store: {
//       token: null,
//       user: null,
//       error: false,
//       loading: false,
//     },
//   };

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(loginUser());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

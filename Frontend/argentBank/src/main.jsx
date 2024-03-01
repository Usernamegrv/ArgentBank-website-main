import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

import App from "./App.jsx";
import Login from "./pages/login/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard.jsx";

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/login",
    element: (
      <Provider store={store}>
        <Login />
      </Provider>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Provider store={store}>
        <DashBoard />
      </Provider>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

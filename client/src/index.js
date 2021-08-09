import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <Router basename="/todo-app">
    <Provider store={store}>
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        autoClose={2500}
        limit={3}
      />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

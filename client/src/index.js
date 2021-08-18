import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";
import store from "./redux/store";

import socketIOClient from "socket.io-client";

const serverURI = process.env.REACT_APP_URI;
const socket = socketIOClient(serverURI, {
  query: {
    token: localStorage.getItem("token"),
  },
});

ReactDOM.render(
  <Router>
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

export { socket };

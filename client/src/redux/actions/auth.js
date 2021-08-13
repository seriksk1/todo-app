import axios from "axios";

import { ACTION_AUTH, TOAST_OPTION } from "../constants";
import { showNotification } from "./notifications";
import { setTasks } from "./tasks";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/auth",
});

export const authSuccess = () => ({
  type: ACTION_AUTH.AUTHORIZED,
});

export const logoutSuccess = () => ({
  type: ACTION_AUTH.LOGOUT,
});

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch([
    showNotification(TOAST_OPTION.USER_LOGOUT),
    setTasks([]),
    logoutSuccess(),
  ]);
};

export const register = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/register", userData);
    localStorage.setItem("token", data.token);

    dispatch([
      showNotification(TOAST_OPTION.USER_REGISTER_SUCCESS),
      authSuccess(),
    ]);
  } catch (err) {
    dispatch(
      showNotification({ type: "error", message: err.response.data.message })
    );
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", userData);
    localStorage.setItem("token", data.token);

    dispatch([
      showNotification(TOAST_OPTION.USER_LOGIN_SUCCESS),
      authSuccess(),
    ]);
  } catch (err) {
    dispatch(
      showNotification({ type: "error", message: err.response.data.message })
    );
  }
};

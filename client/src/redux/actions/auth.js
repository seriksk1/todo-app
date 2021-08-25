import axios from "axios";

import { ACTION_AUTH, HTTP_STATUS, TOAST_OPTION } from "../constants";
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

export const setUserData = (userData) => ({
  type: ACTION_AUTH.SET_USER_DATA,
  payload: userData,
});

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  dispatch([
    showNotification(TOAST_OPTION.USER.LOGOUT),
    setTasks([]),
    logoutSuccess(),
  ]);
};

export const register = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/register", userData);

    localStorage.setItem("token", data.token);
    localStorage.setItem("username", userData.username);

    dispatch([
      setUserData(userData),
      showNotification(TOAST_OPTION.USER.REGISTER_SUCCESS),
      authSuccess(),
    ]);
  } catch (err) {
    dispatch(showNotification(TOAST_OPTION.USER.REGISTER_ERROR));
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", userData);

    localStorage.setItem("token", data.token);
    localStorage.setItem("username", userData.username);

    dispatch([
      setUserData(userData),
      showNotification(TOAST_OPTION.USER.LOGIN_SUCCESS),
      authSuccess(),
    ]);
  } catch (err) {
    const status = err?.response?.data?.statusCode;

    if (status === HTTP_STATUS.BAD_REQUEST) {
      dispatch(showNotification(TOAST_OPTION.USER.LOGIN_WRONG_PASSWORD));
    } else if (status === HTTP_STATUS.NOT_FOUND) {
      dispatch(showNotification(TOAST_OPTION.USER.LOGIN_NOT_FOUND));
    }
  }
};

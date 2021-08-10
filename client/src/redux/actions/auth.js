import axios from "axios";

import { ACTION_AUTH, TOAST_OPTION } from "../constants";
import { showNotification } from "./notifications";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/auth",
});

export const registerSuccess = () => ({
  type: ACTION_AUTH.REGISTER,
});

export const loginSuccess = () => ({
  type: ACTION_AUTH.LOGIN,
});

export const register = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/register", userData);
    localStorage.setItem("token", data.token);

    dispatch(showNotification(TOAST_OPTION.USER_REGISTER_SUCCESS));
  } catch (err) {
    dispatch(showNotification(TOAST_OPTION.USER_REGISTER_ERROR));
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", userData);
    localStorage.setItem("token", data.token);

    dispatch(showNotification(TOAST_OPTION.USER_LOGIN_SUCCESS));
  } catch (err) {
    dispatch(showNotification(TOAST_OPTION.USER_LOGIN_ERROR));
  }
};

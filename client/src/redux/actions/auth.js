import axios from "axios";

import { ACTION_AUTH, TOAST_OPTION } from "../constants";
import { showNotification } from "./notifications";
import { authHeader } from "../../services/auth-header";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/auth",
});

export const authorized = () => ({ type: ACTION_AUTH.AUTHORIZED });

export const logoutSuccess = () => ({
  type: ACTION_AUTH.LOGOUT,
});

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch([showNotification(TOAST_OPTION.USER_LOGOUT), logoutSuccess()]);
};

export const register = (userData) => async (dispatch) => {
  try {
    const { data } = await api.post("/register", userData);
    localStorage.setItem("token", data.token);

    dispatch([
      showNotification(TOAST_OPTION.USER_REGISTER_SUCCESS),
      authorized(),
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

    dispatch([showNotification(TOAST_OPTION.USER_LOGIN_SUCCESS), authorized()]);
  } catch (err) {
    dispatch(
      showNotification({ type: "error", message: err.response.data.message })
    );
  }
};

// export const checkUserToken = () => async (dispatch) => {
//   try {
//     await api.get("/user", { headers: authHeader() });

//     dispatch([showNotification(TOAST_OPTION.USER_LOGIN_SUCCESS), authorized()]);
//   } catch (err) {
//     dispatch(
//       showNotification({ type: "error", message: err.response.data.message })
//     );
//   }
// };

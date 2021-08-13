import axios from "axios";

import { TOAST_OPTION } from "../constants";
import { showNotification } from "./notifications";

import { getSortedTasks, getUpdatedStatus } from "../sorting";

import { logout } from "./auth";

import {
  addTaskSuccess,
  removeTaskSuccess,
  setTaskStatusSuccess,
  setTasks,
} from "./tasks";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/api",
  transformRequest: [
    (data, headers) => {
      headers["x-access-token"] = localStorage.getItem("token");
      return data;
    },
  ],
});

export const addTask = (item) => async (dispatch) => {
  try {
    const { data } = await api.post("/task", item);
    const newItem = data.item;
    dispatch([
      addTaskSuccess(newItem),
      showNotification(TOAST_OPTION.TASK_CREATE),
    ]);
  } catch (err) {
    dispatch([logout(), showNotification(TOAST_OPTION.USER_SESSION_TIMEOUT)]);
  }
};

export const removeTask = (id) => async (dispatch) => {
  try {
    await api.delete(`/task/${id}`);
    dispatch([
      removeTaskSuccess(id),
      showNotification(TOAST_OPTION.TASK_REMOVE),
    ]);
  } catch (err) {
    dispatch([logout(), showNotification(TOAST_OPTION.USER_SESSION_TIMEOUT)]);
  }
};

export const setTaskStatus = (item) => async (dispatch) => {
  const updatedStatus = getUpdatedStatus(item);
  try {
    const { data } = await api.patch(`/task/${item._id}`, {
      status: updatedStatus,
    });
    const updatedItem = data.item;

    dispatch([
      setTaskStatusSuccess(updatedItem),
      showNotification(TOAST_OPTION.TASK_CHANGE),
    ]);
  } catch (err) {
    dispatch([logout(), showNotification(TOAST_OPTION.USER_SESSION_TIMEOUT)]);
  }
};

export const fetchTasks =
  (sortType = "Status") =>
  async (dispatch) => {
    try {
      const { data } = await api.get("/tasks");
      const items = data.data;

      dispatch(setTasks(getSortedTasks(items, sortType)));
    } catch (err) {
      dispatch([logout(), showNotification(TOAST_OPTION.USER_SESSION_TIMEOUT)]);
    }
  };

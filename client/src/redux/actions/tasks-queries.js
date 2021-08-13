import axios from "axios";

import { TOAST_OPTION } from "../constants";
import { showNotification } from "./notifications";

import { getSortedTasks, getUpdatedStatus } from "../helpers/sorting";
import { handleError } from "../helpers/error-handler";

import {
  addTaskSuccess,
  removeTaskSuccess,
  setTaskStatusSuccess,
  setTasks,
} from "./tasks";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/api",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const addTask = (item) => async (dispatch) => {
  try {
    const { data } = await api.post("/task", item);
    const newItem = data.item;
    dispatch([
      addTaskSuccess(newItem),
      showNotification(TOAST_OPTION.TASK.CREATE),
    ]);
  } catch (err) {
    dispatch(handleError(err?.response?.status));
  }
};

export const removeTask = (id) => async (dispatch) => {
  try {
    await api.delete(`/task/${id}`);
    dispatch([
      removeTaskSuccess(id),
      showNotification(TOAST_OPTION.TASK.REMOVE),
    ]);
  } catch (err) {
    dispatch(handleError(err?.response?.status));
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
      showNotification(TOAST_OPTION.TASK.CHANGE),
    ]);
  } catch (err) {
    dispatch(handleError(err?.response?.status));
  }
};

export const fetchTasks = (sortType) => async (dispatch) => {
  try {
    const { data } = await api.get("/tasks");
    const items = data.data;

    dispatch(setTasks(getSortedTasks(items, sortType)));
  } catch (err) {
    dispatch(handleError(err?.response?.status));
  }
};

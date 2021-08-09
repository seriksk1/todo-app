import axios from "axios";

import { TOAST_OPTION } from "../constants";
import { showNotification } from "./notifications";

import { getSortedTasks, getUpdatedStatus } from "./sorting";
import {
  addTaskSuccess,
  removeTaskSuccess,
  setTaskStatusSuccess,
  setTasks,
} from "./tasks";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI,
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
    showNotification(TOAST_OPTION.TASK_ERROR_CREATE);
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
    dispatch(showNotification(TOAST_OPTION.TASK_ERROR_REMOVE));
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
    dispatch(showNotification(TOAST_OPTION.TASK_ERROR_CHANGE));
  }
};

export const fetchTasks = (sortType) => async (dispatch) => {
  try {
    const { data } = await api.get("/tasks");
    const items = data.data;

    dispatch(setTasks(getSortedTasks(items, sortType)));
  } catch (err) {
    dispatch([
      setTasks([]),
      showNotification(TOAST_OPTION.TASK_WARNING_NO_ITEMS),
    ]);
  }
};

import axios from "axios";

import { getSortedTasks, getUpdatedStatus } from "./sorting";
import {
  addTaskSuccess,
  removeTaskSuccess,
  setTaskStatusSuccess,
  setTasks,
} from "./tasks";

const API_URI = process.env.REACT_APP_URI;

console.log(API_URI);

const api = axios.create({
  baseURL: API_URI,
});

export const addTask = (item) => (dispatch) => {
  api
    .post("/task", item)
    .then((res) => {
      dispatch(addTaskSuccess(res.data.item));
    })
    .catch((err) => console.log(err));
};

export const removeTask = (id) => (dispatch) => {
  api
    .delete(`/task/${id}`)
    .then((res) => {
      dispatch(removeTaskSuccess(id));
    })
    .catch((err) => console.log(err));
};

export const setTaskStatus = (item) => (dispatch) => {
  const updatedStatus = getUpdatedStatus(item);

  api
    .patch(`/task/${item._id}`, { status: updatedStatus })
    .then((res) => {
      dispatch(setTaskStatusSuccess(res.data.item));
    })
    .catch((err) => console.log(err));
};

export const fetchTasks = (sortType) => (dispatch) => {
  api
    .get("/tasks")
    .then(({ data }) => {
      const items = data.data;
      dispatch(setTasks(getSortedTasks(items, sortType)));
    })
    .catch((err) => {
      dispatch(setTasks([]));
    });
};

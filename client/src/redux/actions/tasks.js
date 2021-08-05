import axios from "axios";
import { getSortedTasks, getUpdatedStatus } from "./sorting";

const api = axios.create({
  baseURL: `http://localhost:3001/api`,
});

export const addTaskSuccess = (item) => ({
  type: "ADD_TASK",
  payload: item,
});

export const removeTaskSuccess = (id) => ({
  type: "REMOVE_TASK",
  payload: id,
});

export const setTaskStatusSuccess = (item) => ({
  type: "SET_TASK_STATUS",
  payload: item,
});

export const setSortType = (id) => ({
  type: "SET_SORT_TYPE",
  payload: id,
});

export const setTasks = (items) => ({
  type: "SET_TASKS",
  payload: items,
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
  dispatch(removeTaskSuccess(id));
  api
    .delete(`/task/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const setTaskStatus = (item) => (dispatch) => {
  const updatedStatus = getUpdatedStatus(item);

  console.log(updatedStatus);

  api
    .patch(`/task/${item._id}`, { status: updatedStatus })
    .then((res) => {
      console.log(res.data.status);
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

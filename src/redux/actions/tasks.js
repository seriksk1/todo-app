import axios from "axios";
import { getSortedTasks, checkOverdueDate } from "./sorting";

const api = axios.create({
  baseURL: `http://localhost:3001/api`,
});

export const setTasks = (items) => ({
  type: "SET_TASKS",
  payload: items,
});

export const addTaskSuccess = (item) => ({
  type: "ADD_TASK",
  payload: item,
});

export const addTask = (item) => (dispatch) => {
  api
    .post("/task", item)
    .then((res) => {
      dispatch(addTaskSuccess(item));
    })
    .catch((err) => console.log(err));
};

export const removeTask = (index) => ({
  type: "REMOVE_TASK",
  payload: index,
});

export const setTaskStatus = (index) => ({
  type: "SET_TASK_STATUS",
  payload: index,
});

export const setSortType = (id) => ({
  type: "SET_SORT_TYPE",
  payload: id,
});

export const fetchTasks = (sortType) => (dispatch) => {
  api.get("/tasks").then(({ data }) => {
    const items = data.data;
    checkOverdueDate(items);
    dispatch(setTasks(getSortedTasks(items, sortType)));
  });
};

// json-server https://my-json-server.typicode.com/seriksk1/api-todo-app/items/

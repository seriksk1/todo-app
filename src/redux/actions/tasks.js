import axios from "axios";
import { getSortedTasks, checkOverdueDate } from "./sorting";

export const setTasks = (items) => ({
  type: "SET_TASKS",
  payload: items,
});

export const addTask = (items) => ({
  type: "ADD_TASK",
  payload: items,
});

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
  axios
    .get(`https://my-json-server.typicode.com/seriksk1/api-todo-app/items/`)
    .then(({ data }) => {
      checkOverdueDate(data);
      dispatch(setTasks(getSortedTasks(data, sortType)));
    });
};

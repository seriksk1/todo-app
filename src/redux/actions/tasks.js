import axios from "axios";
import { getSortedTasks, strToDate, setOverDueStatus } from "./sorting";

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

export const setSortType = (type) => ({
  type: "SET_SORT_TYPE",
  payload: type,
});

export const fetchTasks = (sortType) => (dispatch) => {
  axios
    .get(`https://my-json-server.typicode.com/seriksk1/api-todo-app/items/`)
    .then(({ data }) => {
      setOverDueStatus(data);
      dispatch(setTasks(getSortedTasks(data, sortType)));
    });
};

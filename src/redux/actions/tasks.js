import axios from "axios";
import { getSortedTasks } from "./sorting";

const api = axios.create({
  baseURL: `http://localhost:3001/api`,
});

export const addTask = (item) => (dispatch) => {
  api
    .post("/task", item)
    .then(() => {
      dispatch(addTaskSuccess(item));
    })
    .catch((err) => console.log(`Error: task wasn't added`));
};

export const addTaskSuccess = (item) => ({
  type: "ADD_TASK",
  payload: item,
});

export const removeTask = (id) => (dispatch) => {
  api
    .delete(`/task/${id}`)
    .then(() => {
      dispatch(removeTaskSuccess(id));
    })
    .catch((err) => console.log(`Error: task wasn't removed`));
};

export const removeTaskSuccess = (id) => ({
  type: "REMOVE_TASK",
  payload: id,
});

export const setTaskStatus = (id) => (dispatch) => {
  api
    .patch(`/task/${id}`)
    .then((res) => {
      dispatch(setTaskStatusSuccess(id));
    })
    .catch((err) => console.log(`Error: task status wasn't updated`));
};

export const setTaskStatusSuccess = (index) => ({
  type: "SET_TASK_STATUS",
  payload: index,
});

export const setSortType = (id) => ({
  type: "SET_SORT_TYPE",
  payload: id,
});

export const fetchTasks = (sortType) => (dispatch) => {
  api
    .get("/tasks")
    .then(({ data }) => {
      const items = data.data;
      dispatch(setTasks(getSortedTasks(items, sortType)));
    })
    .catch((err) => {
      dispatch(setTasks([]));
      console.log(err);
    });
};

export const setTasks = (items) => ({
  type: "SET_TASKS",
  payload: items,
});

// json-server https://my-json-server.typicode.com/seriksk1/api-todo-app/items/

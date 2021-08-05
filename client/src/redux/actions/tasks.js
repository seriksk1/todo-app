import { ACTION } from "../constants";

export const addTaskSuccess = (item) => ({
  type: ACTION.ADD_TASK,
  payload: item,
});

export const removeTaskSuccess = (id) => ({
  type: ACTION.REMOVE_TASK,
  payload: id,
});

export const setTaskStatusSuccess = (item) => ({
  type: ACTION.SET_TASK_STATUS,
  payload: item,
});

export const setSortType = (id) => ({
  type: ACTION.SET_SORT_TYPE,
  payload: id,
});

export const setTasks = (items) => ({
  type: ACTION.SET_TASKS,
  payload: items,
});

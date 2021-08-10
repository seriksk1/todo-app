import { ACTION_TASKS, TOAST_OPTION } from "../constants";
import { showNotification } from "./notifications";

export const addTaskSuccess = (item) => ({
  type: ACTION_TASKS.ADD_TASK,
  payload: item,
});

export const removeTaskSuccess = (id) => ({
  type: ACTION_TASKS.REMOVE_TASK,
  payload: id,
});

export const setTaskStatusSuccess = (item) => ({
  type: ACTION_TASKS.SET_TASK_STATUS,
  payload: item,
});

export const setSortType = (type) => (dispatch) =>
  dispatch([
    {
      type: ACTION_TASKS.SET_SORT_TYPE,
      payload: type,
    },
    showNotification({
      ...TOAST_OPTION.SORT_TYPE_CHANGED,
      message: `Sorted by ${type}`,
    }),
  ]);

export const setTasks = (items) => ({
  type: ACTION_TASKS.SET_TASKS,
  payload: items,
});

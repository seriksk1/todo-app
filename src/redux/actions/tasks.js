export const addTask = (items) => ({
  type: "ADD_TASK",
  payload: items,
});

export const removeTask = (id) => ({
  type: "REMOVE_TASK",
  payload: id,
});

export const setTaskStatus = (id) => ({
  type: "SET_TASK_STATUS",
  payload: id,
});

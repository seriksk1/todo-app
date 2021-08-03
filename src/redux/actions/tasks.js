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

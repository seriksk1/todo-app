export const ACTION = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  SET_TASK_STATUS: "SET_TASK_STATUS",
  SET_SORT_TYPE: "SET_SORT_TYPE",
  SET_TASKS: "SET_TASKS",
};

export const ACTION_NOTIFICATIONS = {
  SET_MESSAGE: "SET_MESSAGE",
  SHOW: "SHOW_NOTIFICATION",
  CLEAN: "CLEAN_NOTIFICATION",
};

export const TASK_STATUS = {
  PENDING: "pending",
  DONE: "done",
  OVERDUE: "overdue",
};

export const SORT_BY = {
  DUEDATE: "Due-date",
  STATUS: "Status",
};

export const TOAST_OPTION = {
  TASK_CREATE: {
    type: "success",
    message: "Task created successfully!",
  },
  TASK_REMOVE: {
    type: "success",
    message: "Task removed successfully!",
  },
  TASK_CHANGE: {
    type: "success",
    message: "Task changed successfully!",
  },
  TASK_ERROR_CREATE: {
    type: "error",
    message: "Error! Task not created!",
  },
  TASK_ERROR_REMOVE: {
    type: "error",
    message: "Error! Task not removed!",
  },
  TASK_ERROR_CHANGE: {
    type: "error",
    message: "Error! Task not changed!",
  },
  TASK_WARNING_NO_ITEMS: {
    type: "info",
    message: "You don't have any tasks yet",
  },
  SORT_TYPE_CHANGED: {
    type: "info",
  },
};

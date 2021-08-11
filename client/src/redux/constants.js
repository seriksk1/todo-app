export const ACTION_TASKS = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  SET_TASK_STATUS: "SET_TASK_STATUS",
  SET_SORT_TYPE: "SET_SORT_TYPE",
  SET_TASKS: "SET_TASKS",
};

export const ACTION_NOTIFICATIONS = {
  SET_NOTIFICATION: "SET_MESSAGE",
  CLEAN: "CLEAN_NOTIFICATION",
};

export const ACTION_AUTH = {
  AUTHORIZED: "AUTHORIZED",
  LOGOUT: "LOGOUT",
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
    message: "Task has been created successfully!",
  },
  TASK_ERROR_CREATE: {
    type: "error",
    message: "Error! Task hasn't created!",
  },

  TASK_REMOVE: {
    type: "success",
    message: "Task has been removed successfully!",
  },
  TASK_ERROR_REMOVE: {
    type: "error",
    message: "Error! Task hasn't removed!",
  },

  TASK_CHANGE: {
    type: "success",
    message: "Task status has been changed successfully!",
  },
  TASK_ERROR_CHANGE: {
    type: "error",
    message: "Error! Task status hasn't changed!",
  },

  TASK_WARNING_NO_ITEMS: {
    type: "info",
    message: "You don't have any tasks yet",
  },

  SORT_TYPE_CHANGED: {
    type: "info",
  },

  USER_LOGIN_SUCCESS: {
    type: "success",
    message: "You are logged in!",
  },
  USER_LOGIN_ERROR: {
    type: "error",
    message: "User is not registered yet!",
  },

  USER_REGISTER_SUCCESS: {
    type: "success",
    message: "Registration success!",
  },
  USER_REGISTER_ERROR: {
    type: "error",
    message: "User already exists!",
  },

  USER_LOGOUT: {
    type: "success",
    message: "You are logged out!",
  },
};

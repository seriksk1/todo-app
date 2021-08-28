export const ACTION_TASKS = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  SET_TASK_STATUS: "SET_TASK_STATUS",
  SET_SORT_TYPE: "SET_SORT_TYPE",
  SET_TASKS: "SET_TASKS",
};

export const ACTION_CHAT = {
  ADD_MESSAGE: "ADD_MESSAGE",
  DELETE_MESSAGE: "DELETE_MESSAGE",

  SET_CURRENT_MESSAGE: "SET_CURRENT_MESSAGE",
  SET_USERS_COUNT_IN_CHAT: "SET_USERS_COUNT_IN_CHAT",
  CHANGE_CURRENT_MESSAGE: "CHANGE_CURRENT_MESSAGE",

  EDIT_MESSAGE: "EDIT_MESSAGE",
  START_EDIT_MESSAGE: "START_EDIT_MESSAGE",
  START_REPLY_MESSAGE: "START_REPLY_MESSAGE",
  FINISH_MESSAGE: "FINISH_MESSAGE",

  SET_MESSAGES: "SET_MESSAGES",
  SET_THEME: "SET_THEME",

  JOIN_TO_CHAT: "JOIN_TO_CHAT",
  LEAVE_FROM_CHAT: "LEAVE_FROM_CHAT",

  CLEAR_ROOM: "CLEAR_ROOM",
};

export const ACTION_ROOMS = {
  ADD_ROOM: "ADD_ROOM",
  SET_ROOMS: "SET_ROOMS",
  SET_CURRENT_ROOM: "SET_CURRENT_ROOM",
  LEAVE_FROM_ROOM: "LEAVE_FROM_ROOM",
};

export const ACTION_NOTIFICATIONS = {
  SET_NOTIFICATION: "SET_MESSAGE",
  CLEAN: "CLEAN_NOTIFICATION",
};

export const ACTION_AUTH = {
  AUTHORIZED: "AUTHORIZED",
  LOGOUT: "LOGOUT",
  SET_USER_DATA: "SET_USER_DATA",
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

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500,
};

export const SOCKET_EVENT = {
  CLIENT: {
    GET_USERS_IN_CHAT: "GET_USERS_IN_CHAT",
    GET_CHAT_HISTORY: "get_chat_history",
    GET_MESSAGE: "get_message",
    GET_EDITED_MESSAGE: "get_edited_message",
    DELETE_MESSAGE: "delete_message",
    JOIN_ROOM: "JOIN_ROOM",
    LEAVE_ROOM: "LEAVE_ROOM",
  },

  SERVER: {
    SEND_USERS_IN_CHAT: "SEND_USERS_IN_CHAT",
    SEND_CHAT_HISTORY: "send_chat_history",
    SEND_MESSAGE: "send_message",
    SEND_EDITED_MESSAGE: "send_edited_message",
    MESSAGE_IS_DELETED: "message_is_deleted",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    JOIN_ROOM: "JOIN_ROOM",
    LEAVE_ROOM: "LEAVE_ROOM",
  },
};

export const TOAST_OPTION = {
  TASK: {
    CREATE: {
      type: "success",
      message: "Task has been created successfully!",
    },
    ERROR_CREATE: {
      type: "error",
      message: "Error! Task hasn't created!",
    },

    REMOVE: {
      type: "success",
      message: "Task has been removed successfully!",
    },
    ERROR_REMOVE: {
      type: "error",
      message: "Error! Task hasn't removed!",
    },

    CHANGE: {
      type: "success",
      message: "Task status has been changed successfully!",
    },
    ERROR_CHANGE: {
      type: "error",
      message: "Error! Task status hasn't changed!",
    },

    WARNING_NO_ITEMS: {
      type: "info",
      message: "You don't have any tasks yet",
    },

    SORT_TYPE_CHANGED: {
      type: "info",
    },
  },

  USER: {
    LOGIN_SUCCESS: {
      type: "info",
      message: "You are logged in!",
    },
    LOGIN_NOT_FOUND: {
      type: "error",
      message: "You are not registered yet!",
    },
    LOGIN_WRONG_PASSWORD: {
      type: "error",
      message: "Wrong password!",
    },
    REGISTER_SUCCESS: {
      type: "success",
      message: "Registration success!",
    },
    REGISTER_ERROR: {
      type: "error",
      message: "User already exists!",
    },
    LOGOUT: {
      type: "info",
      message: "You are logged out!",
    },
    SESSION_TIMEOUT: {
      type: "error",
      message: "Your session has timed out. Please login again.",
    },
    ACTION_ERROR: {
      type: "error",
      message: "It doesn't seem to work...",
    },
  },

  INTERNAL_SERVER: {
    type: "error",
    message: "Service is not working now!",
  },
};

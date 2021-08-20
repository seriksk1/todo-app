const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500,
};

const TASK_STATUS = {
  PENDING: "pending",
  DONE: "done",
  OVERDUE: "overdue",
};

const SOCKET_EVENT = {
  CLIENT: {
    GET_CHAT_HISTORY: "get_chat_history",
    GET_MESSAGE: "get_message",
    GET_EDITED_MESSAGE: "get_edited_message",
    DELETE_MESSAGE: "delete_message",
  },

  SERVER: {
    SEND_CHAT_HISTORY: "send_chat_history",
    SEND_MESSAGE: "send_message",
    SEND_EDITED_MESSAGE: "send_edited_message",
    MESSAGE_IS_DELETED: "message_is_deleted",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
  },
};

module.exports = {
  HTTP_STATUS,
  TASK_STATUS,
  SOCKET_EVENT,
};

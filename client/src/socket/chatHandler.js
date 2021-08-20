import { SOCKET_EVENT } from "../redux/constants";
import { socket } from "../index";

export const client = {
  createMessage: (message) => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_MESSAGE, message);
  },

  editMessage: (message) => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_EDITED_MESSAGE, message);
  },

  deleteMessage: (id) => {
    socket.emit(SOCKET_EVENT.CLIENT.DELETE_MESSAGE, id);
  },

  getChatHistory: () => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_CHAT_HISTORY);
  },

  join: (username) => {
    client.createMessage({
      username: username,
      text: `${username} has joined the chat`,
      type: "info",
    });
  },

  disconnect: (username) => {
    client.createMessage({
      username: username,
      text: `${username} has left the chat`,
      type: "info",
    });
    socket.removeAllListeners();
  },
};

export const server = {
  sendMessage: (message) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_MESSAGE, message);
  },

  sendChatHistory: (callback) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_CHAT_HISTORY, callback);
  },

  sendEditedMessage: (message) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_EDITED_MESSAGE, message);
  },

  messageIsDeleted: (id) => {
    socket.on(SOCKET_EVENT.SERVER.MESSAGE_IS_DELETED, id);
  },
};

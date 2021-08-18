import { SOCKET_EVENT } from "../redux/constants";
import { socket } from "../index";

export const client = {
  createMessage: (payload) => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_MESSAGE, payload);
  },

  getChatHistory: () => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_CHAT_HISTORY);
  },

  join: (username) => {
    client.createMessage({
      username: username,
      text: `${username} joined to chat`,
      type: "info",
    });
  },

  disconnect: (username) => {
    client.createMessage({
      username: username,
      text: `${username} disconnect from chat`,
      type: "info",
    });
    socket.removeAllListeners();
  },
};

export const server = {
  sendMessage: (payload) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_MESSAGE, payload);
  },

  sendChatHistory: (callback) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_CHAT_HISTORY, callback);
  },
};

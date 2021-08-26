import { SOCKET_EVENT } from "../redux/constants";
import { socket } from "../pages/RoomPage";

export const client = {
  createMessage: (message, roomId) => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_MESSAGE, message, roomId);
  },

  editMessage: (message, roomId) => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_EDITED_MESSAGE, message);
  },

  deleteMessage: (id, roomId) => {
    socket.emit(SOCKET_EVENT.CLIENT.DELETE_MESSAGE, id);
  },

  getChatHistory: (roomId) => {
    socket.emit(SOCKET_EVENT.CLIENT.GET_CHAT_HISTORY, roomId);
  },

  join: (username, roomId) => {
    console.log("Room:", roomId);
    socket.emit(SOCKET_EVENT.CLIENT.JOIN_ROOM, roomId);
    client.createMessage(
      {
        username: username,
        text: `${username} has joined the chat`,
        type: "info",
      },
      roomId
    );
  },

  disconnect: (username, roomId) => {
    client.createMessage(
      {
        username: username,
        text: `${username} has left the chat`,
        type: "info",
      },
      roomId
    );
    socket.emit(SOCKET_EVENT.CLIENT.LEAVE_ROOM, roomId);
    socket.removeAllListeners();
  },
};

export const server = {
  sendMessage: (message) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_MESSAGE, message);
  },
  sendChatHistory: (chatHistory) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_CHAT_HISTORY, chatHistory);
  },
  sendEditedMessage: (message) => {
    socket.on(SOCKET_EVENT.SERVER.SEND_EDITED_MESSAGE, message);
  },
  messageIsDeleted: (id) => {
    socket.on(SOCKET_EVENT.SERVER.MESSAGE_IS_DELETED, id);
  },
  tokenExpired: (err) => {
    socket.on(SOCKET_EVENT.SERVER.TOKEN_EXPIRED, err);
  },
};

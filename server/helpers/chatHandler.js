const ChatService = require("../services/chat-service");
const bodyValidator = require("./bodyValidator");
const { SOCKET_EVENT } = require("../constants");

module.exports = (io, socket) => {
  const sendMessage = (message, roomId) => {
    io.to(roomId).emit(SOCKET_EVENT.SERVER.SEND_MESSAGE, message);
  };

  const sendChatHistory = (chatHistory, roomId) => {
    io.to(roomId).emit(SOCKET_EVENT.SERVER.SEND_CHAT_HISTORY, chatHistory);
  };

  const sendEditedMessage = (message, roomId) => {
    io.to(roomId).emit(SOCKET_EVENT.SERVER.SEND_EDITED_MESSAGE, message);
  };

  const messageDeleted = (id, roomId) => {
    io.to(roomId).emit(SOCKET_EVENT.SERVER.MESSAGE_IS_DELETED, id);
  };

  const createMessage = async (message, roomId) => {
    try {
      bodyValidator(message, "You must provide a body to create message");
      const newMessage = await ChatService.createMessage(message, roomId);
      sendMessage(newMessage, roomId);
    } catch (err) {
      console.log(err);
    }
  };

  const editMessage = async (message, roomId) => {
    try {
      const { _id, text } = message;
      bodyValidator({ _id, text }, "You must provide a body to edit message");
      const editedMessage = await ChatService.editMessage(message);
      sendEditedMessage(editedMessage, roomId);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMessage = async (id, roomId) => {
    try {
      await ChatService.deleteMessage(id);
      messageDeleted(id, roomId);
    } catch (err) {
      console.log(err);
    }
  };

  const getChatHistory = async (currentRoomId) => {
    try {
      console.log("fetch messages for roomId:", currentRoomId, "\n");
      const items = await ChatService.getMessages(currentRoomId);
      sendChatHistory(items, currentRoomId);
    } catch (err) {
      console.log(err);
    }
  };

  const joinRoom = async (currentRoomId) => {
    try {
      socket.join(currentRoomId);
    } catch (err) {
      console.log(err);
    }
  };

  const leaveRoom = async (currentRoomId) => {
    try {
      socket.leave(currentRoomId);
    } catch (err) {
      console.log(err);
    }
  };

  socket.on(SOCKET_EVENT.CLIENT.LEAVE_ROOM, leaveRoom);
  socket.on(SOCKET_EVENT.CLIENT.JOIN_ROOM, joinRoom);
  socket.on(SOCKET_EVENT.CLIENT.GET_MESSAGE, createMessage);
  socket.on(SOCKET_EVENT.CLIENT.GET_EDITED_MESSAGE, editMessage);
  socket.on(SOCKET_EVENT.CLIENT.GET_CHAT_HISTORY, getChatHistory);
  socket.on(SOCKET_EVENT.CLIENT.DELETE_MESSAGE, deleteMessage);
};

const ChatService = require("../services/chat-service");
const bodyValidator = require("./bodyValidator");
const { SOCKET_EVENT } = require("../constants");

module.exports = (io, socket) => {
  const sendMessage = (message) => {
    io.emit(SOCKET_EVENT.SERVER.SEND_MESSAGE, message);
  };

  const sendChatHistory = (chatHistory) => {
    io.emit(SOCKET_EVENT.SERVER.SEND_CHAT_HISTORY, chatHistory);
  };

  const sendEditedMessage = (message) => {
    io.emit(SOCKET_EVENT.SERVER.SEND_EDITED_MESSAGE, message);
  };

  const messageDeleted = (id) => {
    io.emit(SOCKET_EVENT.SERVER.MESSAGE_IS_DELETED, id);
  };

  const createMessage = async (message, roomId) => {
    try {
      bodyValidator(message, "You must provide a body to create message");
      const newMessage = await ChatService.createMessage(message, roomId);
      sendMessage(newMessage);
    } catch (err) {
      console.log(err);
    }
  };

  const editMessage = async (message) => {
    try {
      const { _id, text } = message;
      bodyValidator({ _id, text }, "You must provide a body to edit message");
      const editedMessage = await ChatService.editMessage(message);
      sendEditedMessage(editedMessage);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await ChatService.deleteMessage(id);
      messageDeleted(id);
    } catch (err) {
      console.log(err);
    }
  };

  const getChatHistory = async (currentRoomId) => {
    try {
      const items = await ChatService.getMessages(currentRoomId);
      sendChatHistory(items);
    } catch (err) {
      console.log(err);
    }
  };

  socket.on(SOCKET_EVENT.CLIENT.GET_MESSAGE, createMessage);
  socket.on(SOCKET_EVENT.CLIENT.GET_EDITED_MESSAGE, editMessage);
  socket.on(SOCKET_EVENT.CLIENT.GET_CHAT_HISTORY, getChatHistory);
  socket.on(SOCKET_EVENT.CLIENT.DELETE_MESSAGE, deleteMessage);
};

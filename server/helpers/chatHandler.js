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

  const createMessage = async (message) => {
    try {
      bodyValidator(message, "You must provide a body to create message");
      const newMessage = await ChatService.createMessage(message);
      sendMessage(newMessage);
    } catch (err) {
      console.log(err);
    }
  };

  const getChatHistory = async () => {
    try {
      const items = await ChatService.getMessages();
      sendChatHistory(items);
    } catch (err) {
      console.log(err);
    }
  };

  socket.on(SOCKET_EVENT.CLIENT.GET_MESSAGE, createMessage);
  socket.on(SOCKET_EVENT.CLIENT.GET_CHAT_HISTORY, getChatHistory);
};

const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");

const ChatService = require("../services/chat-service");

const createMessage = async (message) => {
  try {
    const { text, username } = message;

    if (!text && !username) {
      throw new QueryError(
        HTTP_STATUS.BAD_REQUEST,
        "You must provide a body to create message"
      );
    }

    const newMessage = await ChatService.createMessage(message);
    return newMessage;
  } catch (err) {
    console.log(err);
  }
};

const getMessages = async () => {
  try {
    const messages = await ChatService.getMessages();
    return messages;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createMessage,
  getMessages,
};

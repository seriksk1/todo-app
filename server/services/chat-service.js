const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");
const Message = require("../models/message-model");

const createMessage = async (message) => {
  try {
    const { text, username } = message;

    const newMessage = await new Message({
      text: text,
      username: username,
    });

    await newMessage.save();

    return newMessage;
  } catch (err) {
    console.log(err);
  }
};

const getMessages = async () => {
  try {
    const messages = await Message.find({});
    return messages;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createMessage,
  getMessages,
};

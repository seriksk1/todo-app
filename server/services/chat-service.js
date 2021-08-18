const Message = require("../models/message-model");

const createMessage = async (message) => {
  try {
    const { text, username, type } = message;

    const newMessage = await new Message({
      text: text,
      username: username,
      type: type,
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

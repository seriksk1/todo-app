const Message = require("../models/message-model");

const createMessage = async (message) => {
  try {
    const { text, username, type, repliedMessage, isReply } = message;

    const newMessage = await new Message({
      text: text,
      username: username,
      type: type,
      repliedMessage: repliedMessage,
      isReply: isReply,
    });

    await newMessage.save();

    return newMessage;
  } catch (err) {
    console.log(err);
  }
};

const editMessage = async (message) => {
  try {
    const { _id, text } = message;

    const editedMessage = await Message.findOneAndUpdate(
      { _id: _id },
      { text: text },
      { new: true }
    );
    return editedMessage;
  } catch (err) {
    console.log(err);
  }
};

const deleteMessage = async (id) => {
  try {
    await Message.findOneAndRemove({ _id: id });
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
  editMessage,
  deleteMessage,
};

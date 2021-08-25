import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addMessage,
  deleteMessage,
  editMessage,
  finishMessage,
  setMessages,
  changeCurrentMessage,
} from "../../redux/actions/chat";

import { logout } from "../../redux/actions/auth";
import { authSelector, chatSelector } from "../../redux/selectors";
import { client, server } from "../../socket/chatHandler";

import Chat from "./Chat";

function ChatContainer() {
  const dispatch = useDispatch();

  const { user } = useSelector(authSelector);
  const { isEditingMessage, isReplying, currentText, prevMessage, theme } =
    useSelector(chatSelector);

  const onInputChange = (e) => {
    dispatch(changeCurrentMessage(e.target.value));
  };

  const onMessageSend = (e) => {
    if (currentText !== "") {
      const { _id, username, text } = prevMessage;
      client.createMessage({
        text: currentText,
        username: user.username,
        type: "user",
        isReply: isReplying,
        repliedMessage: isReplying ? { _id, username, text } : {},
      });
    }
    dispatch(changeCurrentMessage(""));
  };

  const onEditAccept = () => {
    client.editMessage({ ...prevMessage, text: currentText });
    dispatch(finishMessage());
  };

  const onEditCancel = () => {
    dispatch(finishMessage());
  };

  // Socket.io handlers //

  const handleGetMessage = (message) => {
    dispatch(addMessage(message));
  };

  const handleSetMessages = (items) => {
    dispatch(setMessages(items));
  };

  const handleGetEditedMessage = (message) => {
    dispatch(editMessage(message));
  };

  const handleMessageIsDeleted = (id) => {
    dispatch(deleteMessage(id));
  };

  const handleTokenExpired = () => {
    dispatch(logout());
  };

  useEffect(() => {
    client.join(user.username);
    client.getChatHistory();

    server.sendMessage(handleGetMessage);
    server.sendChatHistory(handleSetMessages);
    server.sendEditedMessage(handleGetEditedMessage);
    server.messageIsDeleted(handleMessageIsDeleted);
    server.tokenExpired(handleTokenExpired);
    return () => {
      client.disconnect(user.username);
    };
  }, []);

  return (
    <Chat
      isEditingMessage={isEditingMessage}
      isReplying={isReplying}
      onInputChange={onInputChange}
      onMessageSend={onMessageSend}
      messageText={currentText}
      prevMessage={prevMessage}
      onEditAccept={onEditAccept}
      onEditCancel={onEditCancel}
      theme={theme}
    />
  );
}

export default ChatContainer;

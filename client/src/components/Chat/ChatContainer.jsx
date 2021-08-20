import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addMessage,
  deleteMessage,
  editMessage,
  finishEditMessage,
  setMessages,
} from "../../redux/actions/chat";

import { logout } from "../../redux/actions/auth";
import { authSelector, chatSelector } from "../../redux/selectors";
import { client, server } from "../../socket/chatHandler";

import Chat from "./Chat";

function ChatContainer() {
  const dispatch = useDispatch();

  const { user } = useSelector(authSelector);
  const { isEditingMessage, isReplying, currentMessage, theme } =
    useSelector(chatSelector);

  const [messageText, setMessage] = useState("");

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  const onMessageSend = (e) => {
    if (messageText !== "") {
      const { _id, username, text } = currentMessage;
      client.createMessage({
        text: messageText,
        username: user.username,
        type: "user",
        isReply: isReplying,
        repliedMessage: isReplying ? { _id, username, text } : {},
      });
    }
    setMessage("");
  };

  const onEditAccept = () => {
    client.editMessage({ ...currentMessage, text: messageText });
    dispatch(finishEditMessage());
  };

  const onEditCancel = () => {
    dispatch(finishEditMessage());
  };

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

  const handleTokenExpired = (err) => {
    console.log(err);
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

  useEffect(() => {
    setMessage(currentMessage.text);
  }, [currentMessage]);

  return (
    <Chat
      isEditingMessage={isEditingMessage}
      onInputChange={onInputChange}
      onMessageSend={onMessageSend}
      messageText={messageText}
      currentMessage={currentMessage}
      onEditAccept={onEditAccept}
      onEditCancel={onEditCancel}
      theme={theme}
    />
  );
}

export default ChatContainer;

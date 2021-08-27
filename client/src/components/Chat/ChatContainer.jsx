import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addMessage,
  deleteMessage,
  editMessage,
  finishMessage,
  setMessages,
  changeCurrentMessage,
  setUsersCountInRoom,
  clearRoom,
} from "../../redux/actions/chat";
import { leaveFromRoom } from "../../redux/actions/rooms";
import { logout } from "../../redux/actions/auth";

import {
  authSelector,
  chatSelector,
  roomsSelector,
} from "../../redux/selectors";
import { client, server } from "../../socket/chatHandler";

import Chat from "./Chat";

function ChatContainer() {
  const dispatch = useDispatch();

  const { user } = useSelector(authSelector);
  const { currentRoom } = useSelector(roomsSelector);
  const { isEditingMessage, isReplying, currentText, prevMessage, theme } =
    useSelector(chatSelector);

  const onInputChange = (e) => {
    dispatch(changeCurrentMessage(e.target.value));
  };

  const onMessageSend = (e) => {
    if (currentText !== "") {
      const { _id, username, text } = prevMessage;
      client.createMessage(
        {
          text: currentText,
          username: user.username,
          type: "user",
          isReply: isReplying,
          repliedMessage: isReplying ? { _id, username, text } : {},
        },
        currentRoom._id
      );
    }
    dispatch(changeCurrentMessage(""));
  };

  const onEditAccept = () => {
    client.editMessage({ ...prevMessage, text: currentText }, currentRoom._id);
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
  const handleGetUsersInRoom = (users) => {
    dispatch(setUsersCountInRoom(users));
  };

  useEffect(() => {
    client.join(user.username, currentRoom._id);
    client.getChatHistory(currentRoom._id);

    server.sendMessage(handleGetMessage);
    server.sendChatHistory(handleSetMessages);
    server.sendUsersInRoom(handleGetUsersInRoom);

    server.sendEditedMessage(handleGetEditedMessage);
    server.messageIsDeleted(handleMessageIsDeleted);
    server.tokenExpired(handleTokenExpired);
    return () => {
      dispatch([clearRoom(), leaveFromRoom()]);
      client.disconnect(user.username, currentRoom._id);
    };
  }, []);

  return (
    <Chat
      isEditingMessage={isEditingMessage}
      isReplying={isReplying}
      messageText={currentText}
      prevMessage={prevMessage}
      onInputChange={onInputChange}
      onMessageSend={onMessageSend}
      onEditAccept={onEditAccept}
      onEditCancel={onEditCancel}
      theme={theme}
    />
  );
}

export default ChatContainer;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEditMessage, replyMessage } from "../../redux/actions/chat";
import { chatSelector } from "../../redux/selectors";
import { client } from "../../socket/chatHandler";

import Message from "./Message";

function MessageContainer(props) {
  const dispatch = useDispatch();
  const { theme } = useSelector(chatSelector);

  const isUser = (type) => {
    return type !== "info";
  };

  const isOtherUser = (user, type) => {
    return user !== localStorage.getItem("username") && isUser(type);
  };

  const isCurrentUser = (user, type) => {
    return user === localStorage.getItem("username") && isUser(type);
  };

  const isEdited = (message) => {
    const { createdAt, updatedAt } = message;
    return createdAt !== updatedAt ? "Edited by" : null;
  };

  const onMessageDelete = (id) => {
    client.deleteMessage(id);
  };

  const onMessageEdit = (message) => {
    dispatch(startEditMessage(message));
  };

  const onMessageReply = (message) => {
    dispatch(replyMessage(message));
  };

  return (
    <Message
      isUser={isUser}
      isEdited={isEdited}
      isOtherUser={isOtherUser}
      isCurrentUser={isCurrentUser}
      onMessageEdit={onMessageEdit}
      onMessageDelete={onMessageDelete}
      onMessageReply={onMessageReply}
      theme={theme}
      {...props}
    />
  );
}

export default MessageContainer;

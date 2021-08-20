import React from "react";
import { useDispatch } from "react-redux";
import { startEditMessage } from "../../redux/actions/chat";
import { client } from "../../socket/chatHandler";

import Message from "./Message";

function MessageContainer(props) {
  const dispatch = useDispatch();

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

  return (
    <Message
      isUser={isUser}
      isEdited={isEdited}
      isOtherUser={isOtherUser}
      isCurrentUser={isCurrentUser}
      onMessageEdit={onMessageEdit}
      onMessageDelete={onMessageDelete}
      {...props}
    />
  );
}

export default MessageContainer;

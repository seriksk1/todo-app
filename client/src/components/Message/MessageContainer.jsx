import React from "react";
import { useDispatch } from "react-redux";
import { deleteMessage, startEditMessage } from "../../redux/actions/chat";

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

  const onMessageDelete = (id) => {
    dispatch(deleteMessage(id));
  };

  const onMessageEdit = (message) => {
    dispatch(startEditMessage(message));
  };

  return (
    <Message
      isUser={isUser}
      isOtherUser={isOtherUser}
      isCurrentUser={isCurrentUser}
      onMessageEdit={onMessageEdit}
      onMessageDelete={onMessageDelete}
      {...props}
    />
  );
}

export default MessageContainer;

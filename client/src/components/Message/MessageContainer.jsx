import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEditMessage, startReplyMessage } from "../../redux/actions/chat";
import { chatSelector } from "../../redux/selectors";
import { client } from "../../socket/chatHandler";

import Message from "./Message";

function MessageContainer(props) {
  const dispatch = useDispatch();
  const { theme } = useSelector(chatSelector);

  const onMessageDelete = (id) => {
    client.deleteMessage(id);
  };

  const onMessageEdit = (message) => {
    dispatch(startEditMessage(message));
  };

  const onMessageReply = (message) => {
    dispatch(startReplyMessage(message));
  };

  return (
    <Message
      onMessageEdit={onMessageEdit}
      onMessageDelete={onMessageDelete}
      onMessageReply={onMessageReply}
      theme={theme}
      {...props}
    />
  );
}

export default MessageContainer;

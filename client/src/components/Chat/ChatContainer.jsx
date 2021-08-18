import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMessage, setMessages } from "../../redux/actions/chat";
import { authSelector } from "../../redux/selectors";
import { client, server } from "../../socket/chatHandler";

import Chat from "./Chat";

function ChatContainer() {
  const dispatch = useDispatch();

  const { user } = useSelector(authSelector);
  const [messageText, setMessage] = useState("");

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  const onMessageSend = (e) => {
    if (messageText !== "") {
      client.createMessage({
        text: messageText,
        username: user.username,
        type: "user",
      });
      setMessage("");
    }
  };

  const handleGetMessage = (message) => {
    dispatch(addMessage(message));
  };

  const handleSetMessages = (items) => {
    dispatch(setMessages(items));
  };

  useEffect(() => {
    client.join(user.username);
    client.getChatHistory();

    server.sendMessage(handleGetMessage);
    server.sendChatHistory(handleSetMessages);
    return () => {
      client.disconnect(user.username);
    };
  }, []);

  return (
    <Chat
      onInputChange={onInputChange}
      onMessageSend={onMessageSend}
      messageText={messageText}
    />
  );
}

export default ChatContainer;

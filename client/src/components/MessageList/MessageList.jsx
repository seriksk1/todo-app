import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { chatSelector } from "../../redux/selectors";
import { Message } from "../../components";

function MessageList({ classes }) {
  const { items } = useSelector(chatSelector);
  const messagesBottom = useRef(null);

  const scrollToBottom = () => {
    messagesBottom.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [items]);

  return (
    <div className={classes}>
      {items &&
        items.map(({ _id, text, createdAt, username }) => {
          return (
            <Message
              key={_id}
              createdAt={createdAt}
              username={username}
              message={text}
            />
          );
        })}
      <div ref={messagesBottom}></div>
    </div>
  );
}

export default MessageList;

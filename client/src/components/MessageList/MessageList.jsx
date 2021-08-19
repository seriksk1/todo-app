import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { chatSelector } from "../../redux/selectors";
import { MessageContainer } from "../../components";

function MessageList({ classes }) {
  const { items } = useSelector(chatSelector);
  const messagesBottom = useRef(null);

  const scrollToBottom = (ref) => {
    ref.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom(messagesBottom);
  }, [items]);

  return (
    <div className={classes}>
      {items &&
        items.map((message) => {
          return <MessageContainer key={message._id} message={message} />;
        })}
      <div ref={messagesBottom}></div>
    </div>
  );
}

export default MessageList;

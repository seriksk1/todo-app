import React from "react";
import { useSelector } from "react-redux";

import { chatSelector } from "../../redux/selectors";
import { Message } from "../../components";

function MessageList({ classes }) {
  const { items } = useSelector(chatSelector);
  return (
    <div className={classes}>
      {items &&
        items.map(({ id, text, createdAt, username }) => {
          return (
            <Message
              key={id}
              createdAt={createdAt}
              username={username}
              message={text}
            />
          );
        })}
    </div>
  );
}

export default MessageList;

import React from "react";

import { Typography } from "@material-ui/core";
import { isUser } from "../../redux/helpers/message-handler";

function MessageText({
  classes,
  message,
  isReply,
  handleClick,
  repliedMessage,
}) {
  const { type, text } = message;

  return (
    <div
      onClick={handleClick}
      className={isUser(type) ? classes.userMsg : classes.infoMsg}
    >
      {isUser(type) && isReply && (
        <div className={classes.replyBlock}>
          <div className={classes.reply}>
            <Typography className={classes.replyUser}>
              {repliedMessage.username}
            </Typography>
            <Typography className={classes.replyText}>
              {repliedMessage.text}
            </Typography>
          </div>
        </div>
      )}
      <Typography>{text}</Typography>
    </div>
  );
}

export default MessageText;

import React, { useState } from "react";
import { Avatar } from "@material-ui/core";

import { MessageOptions, MessageText, MessageInfo } from "../../components";
import {
  isUser,
  isCurrentUser,
  isOtherUser,
} from "../../redux/helpers/message-handler";

import useStyles from "./message-style";

function Message({
  theme,
  message,
  onMessageDelete,
  onMessageEdit,
  onMessageReply,
}) {
  let classes = useStyles(theme);

  const { type, username, isReply, repliedMessage } = message;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getMessageStyle = (username, type) => {
    return isCurrentUser(username, type)
      ? classes.msgItemRight
      : classes.msgItemLeft;
  };

  return (
    <div className={getMessageStyle(username, type)}>
      {isUser(type) && (
        <>
          <MessageInfo message={message} classes={classes} />
          <MessageOptions
            message={message}
            classes={classes}
            anchorEl={anchorEl}
            handleClose={handleClose}
            onMessageDelete={onMessageDelete}
            onMessageEdit={onMessageEdit}
            onMessageReply={onMessageReply}
          />
        </>
      )}

      <div className={classes.msgWithAvatar}>
        {isOtherUser(username, type) && (
          <Avatar
            className={classes.avatar}
            src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png"
            alt="avatar"
          />
        )}

        <MessageText
          handleClick={handleClick}
          isReply={isReply}
          classes={classes}
          message={message}
          repliedMessage={repliedMessage}
        />
      </div>
    </div>
  );
}

export default Message;

import { Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./message-style";

function Message({ message, createdAt, username, type }) {
  const classes = useStyles();

  const isCurrentUserMessage = (username) => {
    return username === localStorage.getItem("username") && type !== "info";
  };

  const isOtherUser = (username) => {
    return username !== localStorage.getItem("username") && type !== "info";
  };

  const getMessageStyle = (username) => {
    return isCurrentUserMessage(username)
      ? classes.msgItemRight
      : classes.msgItemLeft;
  };

  return (
    <div className={getMessageStyle(username)}>
      {type !== "info" ? (
        <span>
          <Typography className={classes.msgInfo} variant="body2">
            {username} at {new Date(createdAt).toLocaleTimeString()}
          </Typography>
        </span>
      ) : null}
      <div className={classes.msgWithAvatar}>
        {isOtherUser(username) ? (
          <img
            className={classes.avatar}
            src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png"
            alt="avatar"
          />
        ) : null}
        <div className={type === "info" ? classes.infoMsg : classes.userMsg}>
          <Typography>{message}</Typography>
        </div>
      </div>
    </div>
  );
}

export default Message;

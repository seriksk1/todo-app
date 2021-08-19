import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography, Avatar } from "@material-ui/core";

import useStyles from "./message-style";

function Message({
  message,
  isUser,
  isOtherUser,
  isCurrentUser,
  onMessageDelete,
  onMessageEdit,
}) {
  let classes = useStyles();

  const { _id, type, username, text, createdAt } = message;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMessageDelete = () => {
    onMessageDelete(_id);
    handleClose();
  };

  const handleMessageEdit = () => {
    onMessageEdit(message);
    handleClose();
  };

  const getMessageStyle = (username, type) => {
    return isCurrentUser(username, type)
      ? classes.msgItemRight
      : classes.msgItemLeft;
  };

  return (
    <div className={getMessageStyle(username, type)}>
      {isUser(type) ? (
        <Typography className={classes.msgInfo} variant="body2">
          {username} at {new Date(createdAt).toLocaleTimeString()}
        </Typography>
      ) : null}

      <div className={classes.msgWithAvatar}>
        {isOtherUser(username, type) ? (
          <Avatar
            className={classes.avatar}
            src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png"
            alt="avatar"
          />
        ) : null}

        <Typography
          className={isUser(type) ? classes.userMsg : classes.infoMsg}
          onClick={handleClick}
        >
          {text}
        </Typography>

        {isCurrentUser(username, type) ? (
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleMessageDelete}>Delete</MenuItem>
            <MenuItem onClick={handleMessageEdit}>Edit</MenuItem>
          </Menu>
        ) : null}
      </div>
    </div>
  );
}

export default Message;

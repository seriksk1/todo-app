import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography, Avatar } from "@material-ui/core";

import useStyles from "./message-style";

function Message({
  message,
  isUser,
  isEdited,
  isOtherUser,
  isCurrentUser,
  onMessageDelete,
  onMessageEdit,
  onMessageReply,
  theme,
}) {
  let classes = useStyles(theme);

  const { _id, type, username, text, createdAt, isReply, repliedMessage } =
    message;

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

  const handleMessageReply = () => {
    onMessageReply(message);
    handleClose();
  };

  const getMessageStyle = (username, type) => {
    return isCurrentUser(username, type)
      ? classes.msgItemRight
      : classes.msgItemLeft;
  };

  return (
    <div className={getMessageStyle(username, type)}>
      {isUser(type) && (
        <Typography className={classes.msgInfo} variant="body2">
          {isEdited(message)} {username} at{" "}
          {new Date(createdAt).toLocaleTimeString()}
        </Typography>
      )}

      <div className={classes.msgWithAvatar}>
        {isOtherUser(username, type) && (
          <Avatar
            className={classes.avatar}
            src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png"
            alt="avatar"
          />
        )}

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

        {isUser(type) && (
          <Menu
            className={classes.msgMenu}
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleMessageReply}>Reply</MenuItem>

            {isCurrentUser(username, type) && (
              <MenuItem onClick={handleMessageDelete}>Delete</MenuItem>
            )}

            {isCurrentUser(username, type) && (
              <MenuItem onClick={handleMessageEdit}>Edit</MenuItem>
            )}
          </Menu>
        )}
      </div>
    </div>
  );
}

export default Message;

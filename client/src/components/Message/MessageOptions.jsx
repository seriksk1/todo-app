import React from "react";

import { Menu, MenuItem } from "@material-ui/core";

import { isCurrentUser } from "../../redux/helpers/message-handler";

function MessageOptions({
  open,
  classes,
  message,
  anchorEl,
  handleClose,
  onMessageDelete,
  onMessageEdit,
  onMessageReply,
}) {
  const { _id, username, type } = message;

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

  return (
    <Menu
      className={classes.msgMenu}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
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
  );
}

export default MessageOptions;

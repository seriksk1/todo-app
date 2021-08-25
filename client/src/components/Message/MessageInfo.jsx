import React from "react";

import { Typography } from "@material-ui/core";
import { isEdited } from "../../redux/helpers/message-handler";

function MessageInfo({ message, classes }) {
  const { username, createdAt } = message;

  return (
    <Typography className={classes.msgInfo} variant="body2">
      {isEdited(message)} {username} at{" "}
      {new Date(createdAt).toLocaleTimeString()}
    </Typography>
  );
}

export default MessageInfo;

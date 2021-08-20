import React from "react";

import ChatIcon from "@material-ui/icons/Chat";
import { IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  chatBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
  },
});

function ChatButton() {
  const classes = useStyles();

  return (
    <Link className={classes.chatBtn} to={"/chat"}>
      <IconButton>
        <ChatIcon color="action" />
      </IconButton>
    </Link>
  );
}

export default ChatButton;

import React from "react";

import SendIcon from "@material-ui/icons/Send";
import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "0 0 0 5px",
  },
  btnIcon: {
    width: "23px",
    height: "23px",
  },
});

function SendMessageButton({ message, onMessageSend }) {
  const classes = useStyles();

  const handleMessageSend = () => {
    onMessageSend(message);
  };

  return (
    <IconButton className={classes.root} onClick={handleMessageSend}>
      <SendIcon className={classes.btnIcon} />
    </IconButton>
  );
}

export default SendMessageButton;

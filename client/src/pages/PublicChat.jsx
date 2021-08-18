import React from "react";

import { Typography, makeStyles } from "@material-ui/core";
import { BackButton, ChatContainer } from "../components";

const useStyles = makeStyles({
  pageTitle: {
    marginBottom: "20px",
  },
});

function Chat() {
  const classes = useStyles();

  return (
    <>
      <BackButton />
      <Typography className={classes.pageTitle} variant="h4" component="h4">
        Public chat
      </Typography>
      <ChatContainer />
    </>
  );
}

export default Chat;

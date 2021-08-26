import React from "react";

import { Typography, makeStyles } from "@material-ui/core";
import { BackButton, ChatContainer, ThemesMenuContainer } from "../components";

import socketIOClient from "socket.io-client";

const serverURI = process.env.REACT_APP_URI;
export const socket = socketIOClient(serverURI, {
  query: {
    token: localStorage.getItem("token"),
  },
});

const useStyles = makeStyles({
  pageTitle: {
    marginBottom: "20px",
  },
});

function RoomPage() {
  const classes = useStyles();

  return (
    <>
      <BackButton path="/rooms" />
      <Typography className={classes.pageTitle} variant="h4" component="h4">
        Public chat
      </Typography>
      <ThemesMenuContainer />
      <ChatContainer />
    </>
  );
}

export default RoomPage;

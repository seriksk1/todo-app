import React from "react";
import { useSelector } from "react-redux";

import { Typography, makeStyles } from "@material-ui/core";

import { BackButton, ChatContainer, ThemesMenuContainer } from "../components";
import socketIOClient from "socket.io-client";

import { chatSelector } from "../redux/selectors";

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
  const { usersInChatCount } = useSelector(chatSelector);

  return (
    <>
      <BackButton path="/rooms" />
      <Typography className={classes.pageTitle} variant="h4" component="h4">
        Users in chat: {usersInChatCount}
      </Typography>
      <ThemesMenuContainer />
      <ChatContainer />
    </>
  );
}

export default RoomPage;

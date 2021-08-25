import React from "react";

import { Typography, makeStyles } from "@material-ui/core";
import { BackButton, ChatContainer, ThemesMenuContainer } from "../components";

const useStyles = makeStyles({
  pageTitle: {
    marginBottom: "20px",
  },
});

function RoomPage() {
  const classes = useStyles();

  return (
    <>
      <BackButton />
      <Typography className={classes.pageTitle} variant="h4" component="h4">
        Public chat
      </Typography>
      <ThemesMenuContainer />
      <ChatContainer />
    </>
  );
}

export default RoomPage;

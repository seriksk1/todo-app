import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

function Message({ message, createdAt, username }) {
  const useStyles = makeStyles({
    message: {
      width: "fit-content",
      maxWidth: "80%",
      wordWrap: "break-word",
      padding: "20px 10px",
      margin: "5px 0px 15px",
      backgroundColor: "skyblue",
      borderRadius: "20px",
    },
  });

  const classes = useStyles();
  return (
    <>
      <span>
        {username} at {new Date(createdAt).toLocaleTimeString()}
      </span>
      <div className={classes.message}>
        <Typography>{message}</Typography>
      </div>
    </>
  );
}

export default Message;

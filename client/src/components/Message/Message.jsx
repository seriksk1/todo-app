import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  userMsg: {
    width: "fit-content",
    maxWidth: "80%",
    wordWrap: "break-word",
    padding: "10px 15px",
    margin: "5px 0px 15px",
    backgroundColor: "skyblue",
    borderRadius: "20px",
  },
  infoMsg: {
    width: "fit-content",
    textAlign: "center",
    margin: "10px auto 25px auto",
    padding: "5px 10px",
    maxWidth: "75%",
    wordWrap: "break-word",
    borderRadius: "20px",
    backgroundColor: "#d3ef81",
  },
});

function Message({ message, createdAt, username, type }) {
  const classes = useStyles();

  return (
    <>
      {type !== "info" ? (
        <span>
          <Typography color="textSecondary" variant="body2">
            {username} at {new Date(createdAt).toLocaleTimeString()}
          </Typography>
        </span>
      ) : null}
      <div className={type === "info" ? classes.infoMsg : classes.userMsg}>
        <Typography>{message}</Typography>
      </div>
    </>
  );
}

export default Message;

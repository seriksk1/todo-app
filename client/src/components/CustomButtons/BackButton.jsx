import React from "react";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  chatBtn: {
    position: "absolute",
    top: "15px",
    left: "15px",
  },
});

function BackButton() {
  const classes = useStyles();

  const handleGoBack = () => {};

  return (
    <Link to={"/tasks"}>
      <IconButton className={classes.chatBtn} onClick={handleGoBack}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </Link>
  );
}

export default BackButton;

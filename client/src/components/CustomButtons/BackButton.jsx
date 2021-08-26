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

function BackButton({ path }) {
  const classes = useStyles();

  return (
    <Link to={path}>
      <IconButton className={classes.chatBtn}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </Link>
  );
}

export default BackButton;

import React from "react";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  chatBtn: {
    position: "absolute",
    top: "55px",
    right: "15px",
  },
});

function ContactsButton() {
  const classes = useStyles();

  return (
    <Link to="/rooms">
      <IconButton className={classes.chatBtn}>
        <LibraryBooksIcon color="action" />
      </IconButton>
    </Link>
  );
}

export default ContactsButton;

import React from "react";

import AddIcon from "@material-ui/icons/Add";
import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    width: "fit-content",
    alignSelf: "center",
  },
});

function CreateRoomButton({}) {
  const classes = useStyles();

  const createRoom = () => {};

  return (
    <IconButton className={classes.btn}>
      <AddIcon />
    </IconButton>
  );
}

export default CreateRoomButton;

import React from "react";

import { IconButton } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";

function AcceptEditMessageButton({ onEditAccept }) {
  return (
    <IconButton onClick={onEditAccept}>
      <DoneIcon />
    </IconButton>
  );
}

export default AcceptEditMessageButton;

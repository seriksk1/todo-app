import React from "react";

import { IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

function CancelEditMessageButton({ onEditCancel }) {
  return (
    <IconButton onClick={onEditCancel}>
      <ClearIcon />
    </IconButton>
  );
}

export default CancelEditMessageButton;

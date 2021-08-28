import React from "react";

import { IconButton } from "@material-ui/core";

function ButtonWithIcon({ className, onClick, icon }) {
  return (
    <IconButton className={className} onClick={onClick}>
      {icon}
    </IconButton>
  );
}

export default ButtonWithIcon;

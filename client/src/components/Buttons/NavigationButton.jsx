import React from "react";
import { Link } from "react-router-dom";

import { IconButton } from "@material-ui/core";

function NavigationButton({ className, onClick, icon, path }) {
  return (
    <Link to={path} onClick={onClick}>
      <IconButton className={className}>{icon}</IconButton>
    </Link>
  );
}

export default NavigationButton;

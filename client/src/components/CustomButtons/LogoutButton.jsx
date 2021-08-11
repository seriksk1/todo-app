import React from "react";

import { useDispatch } from "react-redux";

import { IconButton, makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { logout } from "../../redux/actions/auth";

const useStyles = makeStyles({
  btnLogout: {
    position: "absolute",
    top: "15px",
    left: "15px",
  },
});

function LogoutButton() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <IconButton className={classes.btnLogout} onClick={handleLogout}>
      <ExitToAppIcon />
    </IconButton>
  );
}

export default LogoutButton;

import React from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import {
  AddTaskModalContainer,
  SortPopupContainer,
  TaskListContainer,
  NavigationButton,
} from "../components";

import { logout } from "../redux/actions/auth";

const useStyles = makeStyles({
  btnLogout: {
    position: "absolute",
    top: "15px",
    left: "15px",
  },
  btnRooms: {
    position: "absolute",
    top: "15px",
    right: "15px",
  },
});

function Tasks() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <AddTaskModalContainer />
      <SortPopupContainer />
      <TaskListContainer />

      <NavigationButton
        className={classes.btnLogout}
        icon={<ExitToAppIcon />}
        onClick={handleLogout}
        path={"/signin"}
      />

      <NavigationButton
        className={classes.btnRooms}
        icon={<LibraryBooksIcon />}
        path={"/rooms"}
      />
    </>
  );
}

export default Tasks;

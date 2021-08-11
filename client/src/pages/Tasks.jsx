import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import {
  AddTaskModalContainer,
  SortPopupContainer,
  TaskListContainer,
} from "../components";

import { logout } from "../redux/actions/auth";

function Tasks() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <AddTaskModalContainer />
      <Button
        size="medium"
        variant="contained"
        color="default"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <SortPopupContainer />
      <TaskListContainer />
    </>
  );
}

export default Tasks;

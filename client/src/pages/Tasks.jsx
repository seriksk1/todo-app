import React from "react";

import {
  AddTaskModalContainer,
  SortPopupContainer,
  TaskListContainer,
  LogoutButton,
} from "../components";

function Tasks() {
  return (
    <>
      <AddTaskModalContainer />
      <SortPopupContainer />
      <LogoutButton />
      <TaskListContainer />
    </>
  );
}

export default Tasks;

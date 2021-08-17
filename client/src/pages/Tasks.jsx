import React from "react";

import {
  AddTaskModalContainer,
  SortPopupContainer,
  TaskListContainer,
  LogoutButton,
  ChatButton,
} from "../components";

function Tasks() {
  return (
    <>
      <AddTaskModalContainer />
      <SortPopupContainer />
      <LogoutButton />
      <ChatButton />
      <TaskListContainer />
    </>
  );
}

export default Tasks;

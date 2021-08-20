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
      <TaskListContainer />
      <LogoutButton />

      <ChatButton />
    </>
  );
}

export default Tasks;

import React from "react";

import {
  AddTaskModalContainer,
  SortPopupContainer,
  TaskListContainer,
  LogoutButton,
  ChatButton,
  ContactsButton,
} from "../components";

function Tasks() {
  return (
    <>
      <AddTaskModalContainer />
      <SortPopupContainer />
      <TaskListContainer />
      <LogoutButton />
      <ChatButton />
      <ContactsButton />
    </>
  );
}

export default Tasks;

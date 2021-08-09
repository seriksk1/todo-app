import React from "react";

import {
  AddTaskModalContainer,
  SortPopupContainer,
  TaskListContainer,
} from "../components";

function Tasks() {
  return (
    <>
      <AddTaskModalContainer />
      <SortPopupContainer />
      <TaskListContainer />
    </>
  );
}

export default Tasks;

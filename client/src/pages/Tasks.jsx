import React from "react";

import {
  AddTaskModalContainer,
  SortPopupContainer,
  TaskListContainer,
} from "../components";

function Tasks() {
  return (
    <div>
      <AddTaskModalContainer />
      <SortPopupContainer />
      <TaskListContainer />
    </div>
  );
}

export default Tasks;

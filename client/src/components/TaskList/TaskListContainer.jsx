import React from "react";
import { useSelector } from "react-redux";

import TaskList from "./TaskList";

function TaskListContainer() {
  const { items } = useSelector(({ tasks }) => tasks);

  return <TaskList items={items} />;
}

export default TaskListContainer;

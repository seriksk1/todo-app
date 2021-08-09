import React from "react";
import { useSelector } from "react-redux";

import { tasksSelector } from "../../redux/selectors";

import TaskList from "./TaskList";

function TaskListContainer() {
  const { items } = useSelector(tasksSelector);

  return <TaskList items={items} />;
}

export default TaskListContainer;

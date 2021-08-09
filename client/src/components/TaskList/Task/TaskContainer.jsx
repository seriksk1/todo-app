import React from "react";
import { useDispatch } from "react-redux";

import {
  removeTask,
  setTaskStatus,
} from "../../../redux/actions/tasks-queries";

import Task from "./Task";

function TaskContainer({ id, task, status, dueDate }) {
  const dispatch = useDispatch();

  const onRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  const onChangeTaskStatus = (item) => {
    dispatch(setTaskStatus(item));
  };

  return (
    <Task
      id={id}
      task={task}
      status={status}
      dueDate={dueDate}
      onChangeTaskStatus={onChangeTaskStatus}
      onRemoveTask={onRemoveTask}
    />
  );
}

export default TaskContainer;

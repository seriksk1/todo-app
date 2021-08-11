import React from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../../redux/actions/tasks-queries";
import AddTaskModal from "./AddTaskModal";

function AddTaskModalContainer() {
  const dispatch = useDispatch();

  const onAddTask = (obj) => {
    dispatch(addTask(obj));
  };
  return <AddTaskModal onAddTask={onAddTask} />;
}

export default AddTaskModalContainer;

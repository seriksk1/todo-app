import React from "react";
import { useDispatch } from "react-redux";

import AddTaskModal from "./AddTaskModal";

import { addTask } from "../../redux/actions/queries";

function AddTaskModalContainer() {
  const dispatch = useDispatch();

  const onAddTask = (obj) => {
    dispatch(addTask(obj));
  };

  return <AddTaskModal onAddTask={onAddTask} />;
}

export default AddTaskModalContainer;

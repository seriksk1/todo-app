import React from "react";
import { useDispatch } from "react-redux";

import { TASK_STATUS } from "../../../redux/constants";
import { addTask } from "../../../redux/actions/tasks-queries";
import AddTaskModal from "./AddTaskModal";

function AddTaskModalContainer() {
  const dispatch = useDispatch();

  const onAddTask = (obj) => {
    dispatch(addTask({ ...obj, status: TASK_STATUS.PENDING }));
  };
  return <AddTaskModal submitAction={onAddTask} />;
}

export default AddTaskModalContainer;

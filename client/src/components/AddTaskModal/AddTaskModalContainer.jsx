import React from "react";
import { useDispatch } from "react-redux";

import { TASK_STATUS } from "../../redux/constants";
import { addTask } from "../../redux/actions/tasks-queries";
import CustomModal from "./CustomModal";

function AddTaskModalContainer() {
  const dispatch = useDispatch();

  const formText = "New Task";
  const btnText = "OK";
  const fields = [
    {
      id: "task",
      label: "Task",
      variant: "outlined",
      helperText: "At least 3 symbols",
      required: true,
    },
    {
      id: "dueDate",
      type: "date",
      label: "Due-date",
      helperText: "Choose date",
      required: true,
    },
  ];

  const onAddTask = (obj) => {
    dispatch(addTask({ ...obj, status: TASK_STATUS.PENDING }));
  };
  return (
    <CustomModal
      submitAction={onAddTask}
      formText={formText}
      btnText={btnText}
      fields={fields}
    />
  );
}

export default AddTaskModalContainer;

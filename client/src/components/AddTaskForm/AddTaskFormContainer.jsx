import React from "react";

import AddTaskForm from "./AddTaskForm";

function AddTaskFormContainer({ onCloseModal, onAddTask }) {
  return <AddTaskForm onCloseModal={onCloseModal} onAddTask={onAddTask} />;
}

export default AddTaskFormContainer;

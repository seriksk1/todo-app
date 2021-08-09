import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import AddTaskForm from "./AddTaskForm";
import { addTask } from "../../redux/actions/tasks-queries";

import { TASK_STATUS } from "../../redux/constants";

function AddTaskFormContainer({ onCloseModal }) {
  const dispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState(false);

  const [formInput, setFormInput] = useState({
    status: TASK_STATUS.PENDING,
    task: "",
    dueDate: "",
  });

  const onInputChange = (e) => {
    const id = e.target.id;
    const newValue = e.target.value;
    setFormInput((prev) => ({ ...prev, [id]: newValue }));
  };

  const onAddTask = (obj) => {
    dispatch(addTask(obj));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onAddTask(formInput);
      onCloseModal();
    }
  };

  const isInputValid = (value) => {
    return value.length >= 3 ? true : value === "" ? null : false;
  };

  const checkFormValidation = (obj) => {
    let isValid = Object.values(obj)
      .map((value) => isInputValid(value))
      .every((isValid) => isValid);
    setIsFormValid(isValid);
  };

  useEffect(() => {
    checkFormValidation(formInput);
  }, [formInput]);

  return (
    <AddTaskForm
      onCloseModal={onCloseModal}
      handleAddTask={onAddTask}
      onFormSubmit={onFormSubmit}
      onInputChange={onInputChange}
      isInputValid={isInputValid}
      formInput={formInput}
    />
  );
}

export default AddTaskFormContainer;

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../../redux/actions/tasks-queries";
import { TASK_STATUS } from "../../redux/constants";

import Form from "../Form/Form";

function AddTaskFormContainer({ onCloseModal, fields, formText, btnText }) {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({});
  const [isFormValid, setIsFormValid] = useState(null);

  const onAddTask = (obj) => {
    dispatch(addTask(obj));
  };

  const onInputChange = (e) => {
    const id = e.target.id;
    const newValue = e.target.value;
    setFormInput((prev) => ({ ...prev, [id]: newValue }));
  };

  const onFocusChange = (e) => {
    setIsFormValid(true);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (getFormValidation(formInput)) {
      setIsFormValid(true);
      onAddTask({ ...formInput, status: TASK_STATUS.PENDING });
      onCloseModal();
    } else {
      setIsFormValid(false);
    }
  };

  const isInputValid = (obj, key) => {
    const value = obj[key];
    return value.length >= 3 ? true : false;
  };

  const getFormValidation = (obj) => {
    let isValid = Object.keys(obj).every((key) => isInputValid(obj, key));
    return isValid;
  };

  return (
    <Form
      fields={fields}
      formText={formText}
      btnText={btnText}
      isFormValid={isFormValid}
      onFormSubmit={onFormSubmit}
      onInputChange={onInputChange}
      onFocusChange={onFocusChange}
    />
  );
}

export default AddTaskFormContainer;

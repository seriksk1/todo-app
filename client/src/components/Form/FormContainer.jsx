import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";

function FormContainer({ btnText, formText, fields, userAction }) {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({});
  const [isFormValid, setIsFormValid] = useState(null);

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

      // Login or Register func, need refactoring
      userAction && userAction(formInput);
    } else {
      setIsFormValid(false);
    }
  };

  const isInputValid = (obj, key) => {
    const value = obj[key];
    let isValid = null;

    switch (key) {
      case "email":
        isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return isValid;

      case "password":
        isValid = value.length >= 6 && value.toLowerCase() !== value;
        return isValid;

      case "task":
        isValid = value.length >= 3 ? true : false;
        return isValid;

      case "date":
        isValid = value.length > 0 ? true : false;
        return isValid;

      default:
        console.log("Undefined id");
        return false;
    }
  };

  const getFormValidation = (obj) => {
    let isValid = Object.keys(obj).every((key) => isInputValid(obj, key));
    return isValid;
  };

  return (
    <Form
      fields={fields}
      btnText={btnText}
      formText={formText}
      isFormValid={isFormValid}
      onFormSubmit={onFormSubmit}
      onInputChange={onInputChange}
      onFocusChange={onFocusChange}
      userAction={userAction}
    />
  );
}

export default FormContainer;

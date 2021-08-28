import React, { useState } from "react";

import { getFormValidation } from "./form-validation";

function FormContainer({ FormView, onSubmitAction }) {
  const [formInput, setFormInput] = useState({});
  const [isFormValid, setIsFormValid] = useState(null);

  const onInputChange = (e) => {
    const id = e.target.id;
    const newValue = e.target.checked || e.target.value;
    setFormInput((prev) => ({ ...prev, [id]: newValue }));
  };

  const onFocusChange = (e) => {
    setIsFormValid(true);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (getFormValidation(formInput)) {
      setIsFormValid(true);
      onSubmitAction && onSubmitAction(formInput);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <FormView
      onInputChange={onInputChange}
      onFocusChange={onFocusChange}
      onFormSubmit={onFormSubmit}
      isFormValid={isFormValid}
    />
  );
}

export default FormContainer;

import React, { useState } from "react";
import Form from "./Form";

import { getFormValidation } from "./form-validation";

function FormContainer({
  btnText,
  formText,
  fields,
  onSubmitAction,
  authHelperText,
  authHelperPath,
}) {
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
      onSubmitAction && onSubmitAction(formInput);
    } else {
      setIsFormValid(false);
    }
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
      onSubmitAction={onSubmitAction}
      authHelperText={authHelperText}
      authHelperPath={authHelperPath}
    />
  );
}

export default FormContainer;

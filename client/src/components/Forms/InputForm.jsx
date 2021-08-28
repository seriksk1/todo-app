import React from "react";

import { TextField } from "@material-ui/core";

function InputForm({
  id,
  type,
  label,
  variant,
  required,
  className,
  helperText,
  isFormValid,
  onInputChange,
  onFocusChange,
}) {
  const handleInputChange = (e) => {
    onInputChange(e);
  };

  const handleFocusChange = (e) => {
    onFocusChange(e);
  };

  return (
    <TextField
      key={`${label}_${type}`}
      id={id}
      type={type}
      label={label}
      variant={variant}
      helperText={isFormValid !== false ? null : helperText}
      onFocus={handleFocusChange}
      onChange={handleInputChange}
      className={className}
      error={isFormValid === false ? true : false}
      InputLabelProps={{
        shrink: type === "date" ? true : undefined,
      }}
      required={required}
    />
  );
}

export default InputForm;

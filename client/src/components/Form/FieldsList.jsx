import React from "react";

import { TextField } from "@material-ui/core";

function FieldsList({
  fields,
  fieldStyle,
  isFormValid,
  onFocusChange,
  onInputChange,
}) {
  const handleInputChange = (e) => {
    onInputChange(e);
  };

  const handleFocusChange = (e) => {
    onFocusChange(e);
  };

  return (
    <>
      {fields &&
        fields.map(({ id, type, label, variant, helperText, required }) => {
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
              className={fieldStyle}
              error={isFormValid === false ? true : false}
              InputLabelProps={{
                shrink: type === "date" ? true : undefined,
              }}
              required={required}
            />
          );
        })}
    </>
  );
}

export default FieldsList;

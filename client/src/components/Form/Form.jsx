import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

import { TextField } from "@material-ui/core";
import { SubmitButton } from "../index";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "300px",
    maxWidth: "400px",
    paddingBottom: "30px",

    "& h4": {
      margin: "20px 0",
      fontSize: 32,
      textAlign: "center",
    },
  },
  textField: {
    width: "80%",
    marginBottom: 30,
  },
  btnSubmit: {
    width: 150,
  },
});

function Form({
  btnText,
  formText,
  fields,
  isFormValid,
  onInputChange,
  onFocusChange,
  onFormSubmit,
}) {
  const classes = useStyles();

  const handleInputChange = (e) => {
    onInputChange(e);
  };

  const handleFocusChange = (e) => {
    onFocusChange(e);
  };

  const handleFormSubmit = (e) => {
    onFormSubmit(e);
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleFormSubmit}
      autoComplete="off"
    >
      <Typography className={classes.formTitle} variant="h4" component="h4">
        {formText}
      </Typography>

      {fields &&
        fields.map(({ type, label, variant, helperText, required }) => {
          return (
            <TextField
              key={`${label}_${type}`}
              id={type}
              error={isFormValid === false ? true : false}
              className={classes.textField}
              onChange={handleInputChange}
              onFocus={handleFocusChange}
              type={type}
              label={label}
              variant={variant}
              helperText={helperText}
              InputLabelProps={{
                shrink: type === "date" ? true : undefined,
              }}
              required={required}
            />
          );
        })}

      <SubmitButton btnText={btnText} btnStyles={classes.btnSubmit} />
    </form>
  );
}

export default Form;

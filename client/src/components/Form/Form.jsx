import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import FieldsList from "./FieldsList";
import { SubmitButton } from "../index";

import useStyles from "./form-style";

function Form({
  btnText,
  formText,
  fields,
  isFormValid,
  onInputChange,
  onFocusChange,
  onFormSubmit,
  authHelperText,
  authHelperPath,
}) {
  const classes = useStyles();

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

      <FieldsList
        isFormValid={isFormValid}
        onInputChange={onInputChange}
        onFocusChange={onFocusChange}
        fieldStyle={classes.textField}
        fields={fields}
      />

      {authHelperText ? (
        <Link to={authHelperPath} className={classes.authHelperText}>
          <Typography>{authHelperText}</Typography>
        </Link>
      ) : null}

      <SubmitButton btnText={btnText} btnStyles={classes.btnSubmit} />
    </form>
  );
}

export default Form;

import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { SubmitButton } from "../../";
import InputForm from "../InputForm";

import useStyles from "../form-style";

function SignInForm({
  onFormSubmit,
  onInputChange,
  onFocusChange,
  isFormValid,
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
        Login Form
      </Typography>

      <InputForm
        id="username"
        type="text"
        label="Username"
        variant="outlined"
        className={classes.textField}
        required
        onInputChange={onInputChange}
        onFocusChange={onFocusChange}
        onFormSubmit={onFormSubmit}
        isFormValid={isFormValid}
      />

      <InputForm
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        className={classes.textField}
        helperText="At least 6 characters and 1 upper case letter"
        required
        onInputChange={onInputChange}
        onFocusChange={onFocusChange}
        onFormSubmit={onFormSubmit}
        isFormValid={isFormValid}
      />

      <Link to="/signup" className={classes.authHelperText}>
        <Typography>Haven't account yet?</Typography>
      </Link>

      <SubmitButton btnText="Sign In" btnStyles={classes.btnSubmit} />
    </form>
  );
}

export default SignInForm;

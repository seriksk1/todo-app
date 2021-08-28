import React from "react";

import { Typography } from "@material-ui/core";

import { SubmitButton } from "../..";
import InputForm from "../InputForm";

import useStyles from "../form-style";

function AddTaskForm({
  isFormValid,
  onInputChange,
  onFocusChange,
  onFormSubmit,
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
        New Task
      </Typography>

      <InputForm
        id="task"
        label="Task"
        variant="outlined"
        helperText="At least 3 symbols"
        required
        className={classes.textField}
        onInputChange={onInputChange}
        onFocusChange={onFocusChange}
        isFormValid={isFormValid}
      />

      <InputForm
        id="dueDate"
        type="date"
        label="Due-date"
        helperText="Choose date"
        required
        className={classes.textField}
        onFocusChange={onFocusChange}
        onInputChange={onInputChange}
        isFormValid={isFormValid}
      />

      <SubmitButton btnText="OK" btnStyles={classes.btnSubmit} />
    </form>
  );
}

export default AddTaskForm;

import React from "react";

import { Typography } from "@material-ui/core";

import { SubmitButton } from "../../index";
import InputForm from "../InputForm";

import useStyles from "../form-style";

function AddRoomForm({
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
        New Room
      </Typography>

      <InputForm
        id="name"
        label="Room name"
        variant="outlined"
        helperText="At least 3 symbols"
        required
        className={classes.textField}
        onInputChange={onInputChange}
        onFocusChange={onFocusChange}
        isFormValid={isFormValid}
      />

      <SubmitButton btnText="OK" btnStyles={classes.btnSubmit} />
    </form>
  );
}

export default AddRoomForm;

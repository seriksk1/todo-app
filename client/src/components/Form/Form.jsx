import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

import { TextField } from "@material-ui/core";
import { SubmitButton } from "../index";
import { Link } from "react-router-dom";
import FieldsList from "./FieldsList";

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
      fontSize: "32px",
      textAlign: "center",
    },
  },
  textField: {
    width: "80%",
    marginBottom: "30px",
    "&:last-of-type": {
      marginBottom: "15px",
    },
  },
  btnSubmit: {
    width: 150,
    marginTop: "15px",
  },
  authHelperText: {
    fontSize: "14px",
    "&:hover": {
      color: "red",
    },
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

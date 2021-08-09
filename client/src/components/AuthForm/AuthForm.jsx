import React from "react";

import { makeStyles } from "@material-ui/core";

import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: "80%",
    marginBottom: 30,
  },
  addTaskBtn: {
    width: 150,
  },
});

function AuthForm({ btnText }) {
  const classes = useStyles();
  return (
    <form
      className={classes.form}
      onSubmit={() => console.log("submit")}
      autoComplete="off"
    >
      <TextField
        id="task"
        error={false}
        className={classes.textField}
        onChange={() => console.log("change")}
        label="Task"
        variant="outlined"
        helperText={false}
        required
      />

      <TextField
        id="dueDate"
        error={false}
        className={classes.textField}
        onChange={() => console.log("change")}
        type="date"
        label="Due-date"
        InputLabelProps={{
          shrink: true,
        }}
        helperText={false}
      />
      <Button
        className={classes.addTaskBtn}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
      >
        {btnText}
      </Button>
    </form>
  );
}

export default AuthForm;

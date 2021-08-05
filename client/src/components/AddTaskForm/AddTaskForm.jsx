import { useEffect, useState } from "react";
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

function AddTaskForm({ onCloseModal, onAddTask }) {
  const classes = useStyles();

  const [isFormValid, setIsFormValid] = useState(false);

  const [formInput, setFormInput] = useState({
    status: "pending",
    task: "",
    dueDate: "",
  });

  const isInputValid = (value) => {
    return value.length >= 3 ? true : value === "" ? null : false;
  };

  const checkFormValidation = (obj) => {
    let isValid = Object.values(obj)
      .map((value) => isInputValid(value))
      .every((isValid) => isValid);
    setIsFormValid(isValid);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handleAddTask(formInput);
      onCloseModal();
    }
  };

  useEffect(() => {
    checkFormValidation(formInput);
  }, [formInput]);

  function handleInput(e) {
    const id = e.target.id;
    const newValue = e.target.value;
    setFormInput((prev) => ({ ...prev, [id]: newValue }));
  }

  const handleAddTask = (obj) => {
    onAddTask(obj);
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleFormSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="task"
        error={isInputValid(formInput.task) === false ? true : null}
        className={classes.textField}
        onChange={handleInput}
        label="Task"
        variant="outlined"
        helperText={isInputValid(formInput.task) ? null : "At least 3 symbols"}
        required
      />

      <TextField
        id="dueDate"
        error={isInputValid(formInput.dueDate) === false ? true : null}
        className={classes.textField}
        onChange={handleInput}
        type="date"
        label="Due-date"
        InputLabelProps={{
          shrink: true,
        }}
        helperText={isInputValid(formInput.dueDate) ? null : "Choose date"}
      />
      <Button
        className={classes.addTaskBtn}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
      >
        OK
      </Button>
    </form>
  );
}

export default AddTaskForm;

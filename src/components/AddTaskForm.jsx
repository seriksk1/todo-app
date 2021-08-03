import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: "80%",
    marginBottom: 20,
  },
  outlined: {
    padding: "18.5px 14px",
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
  const [inputErrors, setInputErrors] = useState({
    task: false,
    dueDate: false,
  });

  const checkFormValidation = (obj) => {
    let isValid = Object.values(obj).every((isValid) => isValid);
    setIsFormValid(!isValid);
  };

  const checkInputValid = (keys) => {
    keys.forEach((key) => {
      console.log(formInput[key]);
      if (formInput[key] && formInput[key].length >= 3) {
        setInputErrors((prev) => ({ ...prev, [key]: false }));
      } else {
        setInputErrors((prev) => ({ ...prev, [key]: true }));
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handleAddTask(formInput);
      onCloseModal();
    }
  };

  function handleInput(e) {
    const id = e.target.id;
    const newValue = e.target.value;
    setFormInput((prev) => ({ ...prev, [id]: newValue }));
  }

  const handleAddTask = (obj) => {
    onAddTask(obj);
  };

  useEffect(() => {
    checkInputValid(Object.keys(inputErrors));
    checkFormValidation(inputErrors);
  }, [formInput]);

  return (
    <form
      className={classes.form}
      onSubmit={handleFormSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="task"
        error={inputErrors["task"]}
        className={classes.textField}
        onChange={handleInput}
        label="Task"
        variant="outlined"
        helperText={inputErrors["task"] ? "At least 3 symbols" : null}
        required
      />

      <TextField
        id="dueDate"
        error={inputErrors["dueDate"]}
        className={classes.textField}
        onChange={handleInput}
        type="date"
        label="Due-date"
        InputLabelProps={{
          shrink: true,
        }}
        helperText={inputErrors["dueDate"] ? "Choose date" : null}
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

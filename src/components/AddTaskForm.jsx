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
  const [isInputsValid, setIsInputsValid] = useState({
    task: null,
    dueDate: null,
  });

  const checkFormValidation = (obj) => {
    let isValid = Object.values(obj).every((isValid) => isValid);
    setIsFormValid(isValid);
  };

  const checkInputValid = (keys) => {
    keys.forEach((key) => {
      if (formInput[key].length >= 3) {
        setIsInputsValid((prev) => ({ ...prev, [key]: true }));
      } else if (formInput[key] === "") {
        setIsInputsValid((prev) => ({ ...prev, [key]: null }));
      } else {
        setIsInputsValid((prev) => ({ ...prev, [key]: false }));
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
    checkInputValid(Object.keys(isInputsValid));
  }, [formInput]);

  useEffect(() => {
    checkFormValidation(isInputsValid);
  }, [isInputsValid]);

  return (
    <form
      className={classes.form}
      onSubmit={handleFormSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="task"
        error={
          isInputsValid.task === true || isInputsValid.task === null
            ? false
            : true
        }
        className={classes.textField}
        onChange={handleInput}
        label="Task"
        variant="outlined"
        helperText={!isInputsValid.task ? "At least 3 symbols" : null}
        required
      />

      <TextField
        id="dueDate"
        error={
          isInputsValid.dueDate === true || isInputsValid.dueDate === null
            ? false
            : true
        }
        className={classes.textField}
        onChange={handleInput}
        type="date"
        label="Due-date"
        InputLabelProps={{
          shrink: true,
        }}
        helperText={!isInputsValid.dueDate ? "Choose date" : null}
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

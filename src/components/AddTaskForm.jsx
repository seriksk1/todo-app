import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { addTask } from "../redux/actions/tasks";

const useStyles = makeStyles({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: "80%",
    margin: "20px 0",
  },
  addTaskBtn: {
    width: 150,
    marginTop: 20,
  },
});

function AddTaskForm({ onCloseModal }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [formInput, setFormInput] = useState({ status: "pending" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(formInput));
    onCloseModal();
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const newValue = e.target.value;
    switch (id) {
      case "task":
        setFormInput((prev) => ({ ...prev, task: newValue }));
        break;
      case "dueDate":
        setFormInput((prev) => ({ ...prev, dueDate: newValue }));
        break;

      default:
        break;
    }
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
        className={classes.textField}
        onChange={handleInput}
        label="Task"
        variant="outlined"
      />
      <TextField
        id="dueDate"
        className={classes.textField}
        onChange={handleInput}
        type="date"
        defaultValue={"2021-08-02"}
        label="Due-date"
        InputLabelProps={{
          shrink: true,
        }}
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

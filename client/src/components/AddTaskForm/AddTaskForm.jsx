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

function AddTaskForm({ onFormSubmit, onInputChange, isInputValid, formInput }) {
  const classes = useStyles();

  const handleFormSubmit = (e) => {
    onFormSubmit(e);
  };

  const handleInputChange = (e) => {
    onInputChange(e);
  };

  return (
    <form
      className={classes.form}
      onSubmit={handleFormSubmit}
      autoComplete="off"
    >
      <TextField
        id="task"
        error={isInputValid(formInput.task) === false ? true : null}
        className={classes.textField}
        onChange={handleInputChange}
        label="Task"
        variant="outlined"
        helperText={isInputValid(formInput.task) ? null : "At least 3 symbols"}
        required
      />

      <TextField
        id="dueDate"
        error={isInputValid(formInput.dueDate) === false ? true : null}
        className={classes.textField}
        onChange={handleInputChange}
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

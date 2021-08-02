import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TaskList from "./components/TaskList";

const useStyles = makeStyles({
  addTaskBtn: {
    maxWidth: 200,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <Button
        className={classes.addTaskBtn}
        size="large"
        variant="contained"
        color="primary"
      >
        Add Task
      </Button>
      <TaskList />
    </Grid>
  );
}

export default App;

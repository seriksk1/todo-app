import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import Task from "./Task";
import { removeTask } from "../redux/actions/tasks";

const useStyles = makeStyles({
  taskList: {
    marginTop: 20,
  },
});

function TaskList() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const items = useSelector(({ tasks }) => tasks.items);

  const handleRemoveTask = (id) => {
    console.log("removed");
    dispatch(removeTask(id));
  };

  return (
    <Grid
      className={classes.taskList}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {items.map(({ id, task, status, dueDate }) => {
        return (
          <Task
            key={id}
            task={task}
            status={status}
            dueDate={dueDate}
            onRemoveTask={handleRemoveTask}
          ></Task>
        );
      })}
    </Grid>
  );
}

export default TaskList;

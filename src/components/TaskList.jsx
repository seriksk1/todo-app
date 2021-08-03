import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import Task from "./Task";

const useStyles = makeStyles({
  taskList: {
    marginTop: 20,
  },
});

function TaskList({ items, onRemoveTask }) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.taskList}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      {items &&
        items.map(({ id, task, status, dueDate }, index) => {
          return (
            <Task
              key={`${id}_${dueDate}`}
              index={index}
              task={task}
              status={status}
              dueDate={dueDate}
              onRemove={onRemoveTask}
            ></Task>
          );
        })}
    </Grid>
  );
}

export default TaskList;

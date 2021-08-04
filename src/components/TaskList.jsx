import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import Task from "./Task";

const useStyles = makeStyles({
  taskList: {
    marginTop: 20,
  },
});

function TaskList({ items, onRemoveTask, onChangeTaskStatus }) {
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
      {items.map(({ _id, task, status, dueDate }, index) => {
        return (
          <Task
            id={_id}
            key={`${_id}`}
            index={index}
            task={task}
            status={status}
            dueDate={dueDate}
            onRemove={onRemoveTask}
            onChangeStatus={onChangeTaskStatus}
          ></Task>
        );
      })}
    </Grid>
  );
}

export default TaskList;

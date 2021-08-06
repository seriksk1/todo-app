import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography } from "@material-ui/core";
import TaskContainer from "./Task/TaskContainer";

const useStyles = makeStyles({
  taskList: {
    marginTop: 20,
  },
  warningMessage: {
    fontSize: "24px",
  },
});

function TaskList({ items }) {
  const classes = useStyles();

  return items.length ? (
    <Grid
      className={classes.taskList}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {items.map(({ _id, task, status, dueDate }) => {
        return (
          <TaskContainer
            id={_id}
            key={`${_id}`}
            task={task}
            status={status}
            dueDate={dueDate}
          ></TaskContainer>
        );
      })}
    </Grid>
  ) : (
    <Typography className={classes.warningMessage}>
      You don't have any tasks yet
    </Typography>
  );
}

export default TaskList;

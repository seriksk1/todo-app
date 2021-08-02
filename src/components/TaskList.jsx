import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Task from "./Task"

const useStyles = makeStyles({
    taskList: {
      marginTop: 20,
    }
  });

function TaskList({}) {

    const classes = useStyles();

    const items = [
        { id: 1, task: "do homework", status: "overdue", dueDate: "01.08.2021" },
        { id: 2, task: "wash your hands", status: "done", dueDate: "04.08.2021" },
        { id: 3, task: "make dinner", status: "pending", dueDate: "05.08.2021" },
        { id: 4, task: "watch film", status: "pending", dueDate: "06.08.2021" },
      ];

    return (
        <Grid
        className={classes.taskList}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        xs={12}
      >
        {items.map(({ id, task, status, dueDate }) => {
          return <Task key={id} task={task} status={status} dueDate={dueDate}></Task>
        })}
      </Grid>
    )
}

export default TaskList;
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";

import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    minHeight: 250,
    margin: 20,
  },
  btnAdd: {
    maxWidth: 200,
  },
  taskList: {
    marginTop: 20,
  },
  cardHeader: {
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "center",
  },
});

function Task({ task, status, dueDate }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title="Card"
        textAlign="center"
      />
      <CardContent>
        <Typography>Task: {task}</Typography>
        <Typography>Status: {status}</Typography>
        <Typography>Duedate: {dueDate}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {status === "done" ? (
          <IconButton aria-label="checked">
            <CheckBoxIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="unchecked">
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        )}

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Task;

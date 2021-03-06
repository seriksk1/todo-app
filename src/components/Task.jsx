import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";

import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import Checkbox from "@material-ui/core/Checkbox";

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
  bold: {
    fontWeight: 700,
  },
});

function Task({ id, task, status, dueDate, onRemove, onChangeStatus }) {
  const classes = useStyles();

  const handleStatusChange = () => {
    onChangeStatus(id);
  };

  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader} title="Card" />
      <CardContent>
        <Typography>
          <span className={classes.bold}>Task:</span> {task}
        </Typography>
        <Typography>
          <span className={classes.bold}>Status:</span> {status}
        </Typography>
        <Typography>
          <span className={classes.bold}>Due-date:</span> {dueDate}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Checkbox
          checked={status === "done" ? true : false}
          onChange={handleStatusChange}
          name="checkStatus"
          color="primary"
        />
        <IconButton onClick={handleRemoveClick} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Task;

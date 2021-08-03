import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActions } from "@material-ui/core";

import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import Checkbox from "@material-ui/core/Checkbox";

import { setTaskStatus } from "../redux/actions/tasks";

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

function Task({ index, task, status, dueDate, onRemoveTask }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [checkBoxState, setCheckBoxState] = useState(
    status === "done" ? true : false
  );

  const handleToggleCheckBox = (index) => {
    setCheckBoxState((prev) => !prev);
    dispatch(setTaskStatus(index));
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
          checked={checkBoxState}
          onChange={() => handleToggleCheckBox(index)}
          name="checkStatus"
          color="primary"
        />
        <IconButton onClick={() => onRemoveTask(index)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Task;

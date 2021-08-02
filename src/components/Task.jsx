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
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

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
});

function Task({ id, task, status, dueDate, onRemoveTask }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  //   const [checkBoxState, setCheckBoxState] = useState(
  //     status === "done" ? true : false
  //   );

  //   const handleToggleCheckBox = (id) => {
  //     if (checkBoxState === false) {
  //       setCheckBoxState(!checkBoxState);
  //       dispatch(setTaskStatus(id));
  //     }
  //   };

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader} title="Card" />
      <CardContent>
        <Typography>Task: {task}</Typography>
        <Typography>Status: {status}</Typography>
        <Typography>Duedate: {dueDate}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Checkbox
          //   checked={checkBoxState}
          //   onChange={() => handleToggleCheckBox(id)}
          name="checkStatus"
          color="primary"
        />
        <IconButton onClick={() => onRemoveTask(id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Task;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";

import { AddTaskFormContainer } from "../";
import { Button, Modal, Grid, Typography } from "@material-ui/core";
import { addTask } from "../../redux/actions/queries";

const useStyles = makeStyles({
  modal: {
    alignItems: "center",
    margin: "150px auto",
    width: 400,
    maxHeight: 450,
    paddingBottom: 30,

    backgroundColor: "#f8f8f8",
    border: "2px solid #000",
    boxShadow: "#0f0f0f",
  },
  modalTitle: {
    width: "100%",
    margin: "20px 0",
    fontSize: 32,
    textAlign: "center",
  },
});

function ModalContainer() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onAddTask = (obj) => {
    dispatch(addTask(obj));
  };

  return (
    <div>
      <Button
        className={classes.addTaskBtn}
        onClick={handleOpenModal}
        size="large"
        variant="contained"
        color="primary"
      >
        Add Task
      </Button>

      <Modal open={openModal} onClose={onCloseModal}>
        <Grid container direction="column" className={classes.modal}>
          <Typography className={classes.modalTitle}>New Task</Typography>
          <AddTaskFormContainer
            onAddTask={onAddTask}
            onCloseModal={onCloseModal}
          />
        </Grid>
      </Modal>
    </div>
  );
}

export default ModalContainer;

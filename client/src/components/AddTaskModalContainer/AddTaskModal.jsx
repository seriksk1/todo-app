import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import { Button, Modal, Grid } from "@material-ui/core";

import { AddTaskFormContainer } from "../";

const useStyles = makeStyles({
  modal: {
    alignItems: "center",
    margin: "150px auto",
    maxWidth: "350px",
    maxHeight: 450,
    padding: "10px 0",
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

function AddTaskModal() {
  const classes = useStyles();

  const formText = "New Task";
  const btnText = "OK";

  const fields = [
    {
      id: "task",
      label: "Task",
      variant: "outlined",
      helperText: "At least 3 symbols",
      required: true,
    },
    {
      id: "dueDate",
      type: "date",
      label: "Due-date",
      helperText: "Choose date",
      required: true,
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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

      <Modal open={openModal} onClose={handleCloseModal}>
        <Grid container direction="column" className={classes.modal}>
          <AddTaskFormContainer
            fields={fields}
            formText={formText}
            btnText={btnText}
            onCloseModal={handleCloseModal}
          />
        </Grid>
      </Modal>
    </div>
  );
}

export default AddTaskModal;

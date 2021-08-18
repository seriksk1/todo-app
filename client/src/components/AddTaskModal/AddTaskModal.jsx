import React, { useState } from "react";

import { Button, Modal, Grid } from "@material-ui/core";

import { TASK_STATUS } from "../../redux/constants";
import { FormContainer } from "../../components";
import useStyles from "./modal-style";

function AddTaskModal({ onAddTask }) {
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

  const handleAddTask = (obj) => {
    onAddTask({ ...obj, status: TASK_STATUS.PENDING });
    handleCloseModal();
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
          <FormContainer
            fields={fields}
            formText={formText}
            btnText={btnText}
            onSubmitAction={handleAddTask}
          />
        </Grid>
      </Modal>
    </div>
  );
}

export default AddTaskModal;
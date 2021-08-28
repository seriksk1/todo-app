import React, { useState } from "react";

import { Button, Modal, Grid } from "@material-ui/core";

import { FormContainer, AddTaskForm } from "../../";
import useStyles from "../modal-style";

function AddTaskModal({ submitAction, styles }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onSubmitAction = (obj) => {
    submitAction(obj);
    handleCloseModal();
  };

  return (
    <div className={styles}>
      <Button
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
            onSubmitAction={onSubmitAction}
            FormView={AddTaskForm}
          />
        </Grid>
      </Modal>
    </div>
  );
}

export default AddTaskModal;

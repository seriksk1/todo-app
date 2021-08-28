import React, { useState } from "react";

import { Button, Modal, Grid } from "@material-ui/core";
import { FormContainer, AddRoomForm } from "../../";

import useStyles from "../modal-style";

function AddRoomModal({ submitAction }) {
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
    <div className={classes.addRoomBtn}>
      <Button
        onClick={handleOpenModal}
        size="large"
        variant="contained"
        color="primary"
      >
        Add Room
      </Button>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Grid container direction="column" className={classes.modal}>
          <FormContainer
            onSubmitAction={onSubmitAction}
            FormView={AddRoomForm}
          />
        </Grid>
      </Modal>
    </div>
  );
}

export default AddRoomModal;

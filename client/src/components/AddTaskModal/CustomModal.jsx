import React, { useState } from "react";

import { Button, Modal, Grid } from "@material-ui/core";

import { FormContainer } from "..";
import useStyles from "./modal-style";

function CustomModal({ submitAction, fields, formText, btnText, styles }) {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitAction = (obj) => {
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
        {formText}
      </Button>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Grid container direction="column" className={classes.modal}>
          <FormContainer
            fields={fields}
            formText={formText}
            btnText={btnText}
            onSubmitAction={handleSubmitAction}
          />
        </Grid>
      </Modal>
    </div>
  );
}

export default CustomModal;

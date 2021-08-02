import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import SortPopup from "./components/SortPopup";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 20,
  },
  addTaskBtn: {
    width: 150,
  },
  modal: {
    alignItems: "center",
    margin: "20% auto",
    width: 400,
    height: 380,

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

function App() {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid
      className={classes.mainContainer}
      container
      direction="column"
      alignItems="center"
    >
      <Button
        className={classes.addTaskBtn}
        onClick={handleOpenModal}
        size="large"
        variant="contained"
        color="primary"
      >
        Add Task
      </Button>

      <SortPopup />

      <Modal open={openModal} onClose={handleCloseModal}>
        <Grid container direction="column" className={classes.modal}>
          <Typography className={classes.modalTitle}>New Task</Typography>
          <AddTaskForm onCloseModal={handleCloseModal} />
        </Grid>
      </Modal>
      <TaskList />
    </Grid>
  );
}

export default App;

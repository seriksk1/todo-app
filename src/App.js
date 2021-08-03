import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import SortPopup from "./components/SortPopup";

import {
  fetchTasks,
  addTask,
  removeTask,
  setTaskStatus,
  setSortType,
} from "./redux/actions/tasks";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 20,
  },
  addTaskBtn: {
    width: 150,
  },
  modal: {
    alignItems: "center",
    margin: "150px auto",
    width: 400,
    minHeight: 380,

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
  const dispatch = useDispatch();
  const classes = useStyles();

  const sortTypes = ["Due-date", "Status"];

  const { items, sortType } = useSelector(({ tasks }) => tasks);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onSelectType = (type) => {
    dispatch(setSortType(type));
  };

  const onRemoveTask = (index) => {
    dispatch(removeTask(index));
  };

  const onAddTask = (obj) => {
    dispatch(addTask(obj));
  };

  const onChangeTaskStatus = (index) => {
    dispatch(setTaskStatus(index));
  };

  useEffect(() => {
    dispatch(fetchTasks(sortType));
  }, [sortType]);

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

      <SortPopup
        sortType={sortType}
        items={sortTypes}
        onSelectType={onSelectType}
      />

      <Modal open={openModal} onClose={onCloseModal}>
        <Grid container direction="column" className={classes.modal}>
          <Typography className={classes.modalTitle}>New Task</Typography>
          <AddTaskForm onAddTask={onAddTask} onCloseModal={onCloseModal} />
        </Grid>
      </Modal>

      <TaskList
        items={items}
        onRemoveTask={onRemoveTask}
        onChangeTaskStatus={onChangeTaskStatus}
      />
    </Grid>
  );
}

export default App;

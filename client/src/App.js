import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

import { Grid } from "@material-ui/core";
import {
  SortPopupContainer,
  TaskListContainer,
  AddTaskModalContainer,
} from "./components";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 20,
  },
  addTaskBtn: {
    width: 150,
  },
});

function App() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.mainContainer}
      container
      direction="column"
      alignItems="center"
    >
      <AddTaskModalContainer />
      <SortPopupContainer />
      <TaskListContainer />
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        autoClose={2500}
        limit={3}
      />
    </Grid>
  );
}

export default App;

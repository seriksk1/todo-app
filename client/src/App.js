import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import {
  SortPopupContainer,
  TaskListContainer,
  AddTaskModalContainer,
} from "./components";

import Auth from "./pages/Auth";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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

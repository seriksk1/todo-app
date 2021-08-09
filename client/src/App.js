import React from "react";

import { Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import withToast from "./hocs/withToast";

import Auth from "./pages/Auth";
import Tasks from "./pages/Tasks";

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
      <Route exact path="/" component={Tasks} />
      <Route exact path="/auth" component={Auth} />
    </Grid>
  );
}

export default withToast(App);

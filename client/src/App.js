import React from "react";
import { Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Tasks, SignIn, SignUp } from "./pages";

import withToast from "./hocs/withToast";

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
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Grid>
  );
}

export default withToast(App);

import React from "react";
import { Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Tasks, SignIn, SignUp, Chat, ErrorPage } from "./pages";
import ProtectedRoute from "./hocs/ProtectedRoute";
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
      <Switch>
        <ProtectedRoute exact path="/tasks" component={Tasks} />
        <ProtectedRoute exact path="/chat" component={Chat} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Grid>
  );
}

export default withToast(App);

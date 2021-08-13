import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Tasks, SignIn, SignUp, ErrorPage } from "./pages";

import { authSelector } from "./redux/selectors";
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

  const { authorized } = useSelector(authSelector);

  return (
    <Grid
      className={classes.mainContainer}
      container
      direction="column"
      alignItems="center"
    >
      <Switch>
        {authorized ? (
          <Route exact path="/tasks" component={Tasks} />
        ) : (
          <Redirect from="/tasks" to="/signin" />
        )}
        <Route path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Grid>
  );
}

export default withToast(App);

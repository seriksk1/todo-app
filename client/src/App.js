import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Tasks, SignIn, SignUp, RoomPage, ErrorPage, Rooms } from "./pages";
import ProtectedRoute from "./hocs/ProtectedRoute";
import withToast from "./hocs/withToast";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import socketIOClient from "socket.io-client";

const serverURI = process.env.REACT_APP_URI;
export const socket = socketIOClient(serverURI, {
  query: {
    token: localStorage.getItem("token"),
  },
});

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
        <ProtectedRoute exact path="/chat" component={RoomPage} />
        <ProtectedRoute exact path="/rooms" component={Rooms} />

        <Route exact path="/">
          <Redirect to="/tasks" />
        </Route>

        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Grid>
  );
}

export default withToast(App);

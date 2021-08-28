import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import {
  RoomList,
  AddRoomModalContainer,
  NavigationButton,
} from "../components";

import { roomsSelector } from "../redux/selectors";
import { fetchRooms } from "../redux/actions/rooms";

const useStyles = makeStyles({
  pageTitle: {
    textAlign: "center",
    marginBottom: "20px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  backBtn: {
    position: "absolute",
    top: "15px",
    left: "15px",
  },
});

function Rooms() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { items } = useSelector(roomsSelector);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <Grid>
      <NavigationButton
        className={classes.backBtn}
        icon={<KeyboardBackspaceIcon />}
        path="/tasks"
      />

      <Typography variant="h4" className={classes.pageTitle}>
        ROOMS
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <RoomList items={items} />
        <AddRoomModalContainer />
      </Paper>
    </Grid>
  );
}

export default Rooms;

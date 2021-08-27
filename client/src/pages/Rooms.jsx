import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import { RoomList, BackButton, AddRoomModalContainer } from "../components";

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
  addRoomBtn: {
    margin: "0 auto 15px",
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
      <BackButton path="/tasks" />

      <Typography variant="h4" className={classes.pageTitle}>
        ROOMS
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <RoomList items={items} />
        <AddRoomModalContainer styles={classes.addRoomBtn} />
      </Paper>
    </Grid>
  );
}

export default Rooms;

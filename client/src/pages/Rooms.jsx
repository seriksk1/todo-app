import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import { RoomList, BackButton, CreateRoomButton } from "../components";

const useStyles = makeStyles({
  pageTitle: {
    textAlign: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "10px",
  },
});

function Rooms() {
  const classes = useStyles();

  const items = [
    {
      id: 1,
      name: "Friends chat",
      capacity: 4,
      users: [{ username: "seriksk1" }],
      type: "private",
    },
    {
      id: 2,
      name: "Groupmates ZETK",
      capacity: 20,
      users: [{ username: "seriksk2" }],
      type: "private",
    },
    {
      id: 3,
      name: "Game news",
      capacity: 30,
      users: [{ username: "seriksk3" }],
      type: "public",
    },
  ];

  return (
    <Grid>
      <BackButton />
      <Typography variant="h4" className={classes.pageTitle}>
        ROOMS
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <RoomList items={items} />
        <CreateRoomButton />
      </Paper>
    </Grid>
  );
}

export default Rooms;

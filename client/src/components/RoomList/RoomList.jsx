import React from "react";
import { Link } from "react-router-dom";

import { IconButton, Typography } from "@material-ui/core";
import { Lock, LockOpen, Group, KeyboardArrowRight } from "@material-ui/icons";

import { useStyles } from "./room-list-style";

function RoomList({ items }) {
  const classes = useStyles();

  return (
    <ul className={classes.roomsList}>
      {items &&
        items.map(({ id, name, capacity, users, type }) => {
          return (
            <li key={id} className={classes.roomsListItem}>
              <Typography>{name}</Typography>
              <Typography className={classes.usersCount}>
                <Group className={classes.usersIcon} />
                {`${users.length}/${capacity}`}
              </Typography>

              {type === "private" ? (
                <Lock className={classes.lockIcon} />
              ) : (
                <LockOpen className={classes.lockIcon} />
              )}
              <Link to={`/chat`}>
                <IconButton className={classes.enterBtn}>
                  <KeyboardArrowRight />
                </IconButton>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
export default RoomList;

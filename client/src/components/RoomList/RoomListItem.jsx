import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-ui/core";
import { Lock, LockOpen, Group, KeyboardArrowRight } from "@material-ui/icons";
import { setCurrentRoom } from "../../redux/actions/rooms";

function RoomListItem({ item, classes }) {
  const dispatch = useDispatch();
  const { _id, name, capacity, users, isPrivate } = item;

  const handleJoinRoom = () => {
    dispatch(setCurrentRoom(_id));
  };

  return (
    <li key={_id} className={classes.roomsListItem}>
      <Typography>{name}</Typography>
      <Typography className={classes.usersCount}>
        <Group className={classes.usersIcon} />
        {`${users.length}/${capacity}`}
      </Typography>

      {isPrivate ? (
        <Lock className={classes.lockIcon} />
      ) : (
        <LockOpen className={classes.lockIcon} />
      )}
      <Link className={classes.link} to={`/chat`} onClick={handleJoinRoom}>
        <IconButton className={classes.joinBtn}>
          <KeyboardArrowRight />
        </IconButton>
      </Link>
    </li>
  );
}

export default RoomListItem;

import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { IconButton, Typography } from "@material-ui/core";
import { Lock, LockOpen, KeyboardArrowRight } from "@material-ui/icons";
import { setCurrentRoom } from "../../redux/actions/rooms";

function RoomListItem({ item, classes }) {
  const dispatch = useDispatch();
  const { _id, name, isPrivate } = item;

  const handleSetCurrentRoom = () => {
    dispatch(setCurrentRoom(item));
  };

  return (
    <li key={_id} className={classes.roomsListItem}>
      <Typography>{name}</Typography>

      {isPrivate ? (
        <Lock className={classes.lockIcon} />
      ) : (
        <LockOpen className={classes.lockIcon} />
      )}

      <Link
        to={`/chat`}
        className={classes.link}
        onClick={handleSetCurrentRoom}
      >
        <IconButton className={classes.joinBtn}>
          <KeyboardArrowRight />
        </IconButton>
      </Link>
    </li>
  );
}

export default RoomListItem;

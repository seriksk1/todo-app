import React from "react";

import { useStyles } from "./room-list-style";
import RoomListItem from "./RoomListItem";

function RoomList({ items }) {
  const classes = useStyles();

  return (
    <ul className={classes.roomsList}>
      {items &&
        items.map((item) => {
          return <RoomListItem key={item._id} item={item} classes={classes} />;
        })}
    </ul>
  );
}
export default RoomList;

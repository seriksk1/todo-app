import React from "react";
import { useDispatch } from "react-redux";

import AddRoomModal from "./AddRoomModal";
import { addRoom } from "../../../redux/actions/rooms";

function AddRoomModalContainer() {
  const dispatch = useDispatch();

  const onAddRoom = (obj) => {
    dispatch(addRoom({ ...obj, isPrivate: true }));
  };

  return <AddRoomModal submitAction={onAddRoom} />;
}

export default AddRoomModalContainer;

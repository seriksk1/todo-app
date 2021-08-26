import React from "react";
import { useDispatch } from "react-redux";

import CustomModal from "./CustomModal";
import { addRoom } from "../../redux/actions/rooms";

function AddRoomModalContainer(props) {
  const dispatch = useDispatch();

  const formText = "New Room";
  const btnText = "OK";
  const fields = [
    {
      id: "name",
      label: "Room name",
      variant: "outlined",
      helperText: "At least 3 symbols",
      required: true,
    },
    {
      id: "capacity",
      label: "Room size",
      variant: "outlined",
      helperText: "Choose size",
      required: true,
    },
  ];

  const onAddRoom = (obj) => {
    dispatch(addRoom({ ...obj, isPrivate: true }));
  };

  return (
    <CustomModal
      submitAction={onAddRoom}
      formText={formText}
      btnText={btnText}
      fields={fields}
      {...props}
    />
  );
}

export default AddRoomModalContainer;

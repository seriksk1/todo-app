import React from "react";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";

import { Typography, makeStyles } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import {
  ChatContainer,
  FormContainer,
  RoomAuthForm,
  ThemesMenuContainer,
  NavigationButton,
} from "../components";

import { chatSelector, roomsSelector } from "../redux/selectors";
import { joinToChat } from "../redux/actions/chat";

const serverURI = process.env.REACT_APP_URI;
export const socket = socketIOClient(serverURI, {
  query: {
    token: localStorage.getItem("token"),
  },
});

const useStyles = makeStyles({
  pageTitle: {
    marginBottom: "20px",
  },
  backBtn: {
    position: "absolute",
    top: "15px",
    left: "15px",
  },
});

function RoomPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { usersInChatCount, isUserAuthorized } = useSelector(chatSelector);
  const { currentRoom } = useSelector(roomsSelector);

  // const formText = "Password";
  // const btnText = "Enter";

  // const formFields = [
  //   {
  //     id: "password",
  //     type: "password",
  //     label: "Password",
  //     variant: "outlined",
  //     helperText: "At least 6 characters and 1 upper case letter",
  //     required: true,
  //   },
  // ];

  const checkPassword = ({ password }) => {
    console.log("Password is OK");
    if (password === currentRoom.password) {
      dispatch(joinToChat());
    }
  };

  return (
    <>
      <NavigationButton
        className={classes.backBtn}
        icon={<KeyboardBackspaceIcon />}
        path="/rooms"
      />

      {isUserAuthorized || !currentRoom.isPrivate ? (
        <>
          <Typography className={classes.pageTitle} variant="h4" component="h4">
            Users in chat: {usersInChatCount}
          </Typography>
          <ThemesMenuContainer />
          <ChatContainer />
        </>
      ) : (
        <FormContainer FormView={RoomAuthForm} onSubmitAction={checkPassword} />
      )}
    </>
  );
}

export default RoomPage;

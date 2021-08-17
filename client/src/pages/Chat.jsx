import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Paper,
  TextField,
  Container,
  makeStyles,
} from "@material-ui/core";

import { BackButton, MessageList, SendMessageButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, setMessages } from "../redux/actions/chat";
import { authSelector } from "../redux/selectors";
import { socket } from "../index";

const useStyles = makeStyles({
  pageTitle: {
    marginBottom: "20px",
  },
  msgItem: {
    maxWidth: "300px",
    padding: "20px",
  },
  msgInputContainer: {
    display: "flex",
    alignItems: "center",
  },
  msgField: {
    marginRight: "10px",
  },

  msgList: {
    maxWidth: "300px",
    height: "300px",
    overflowY: "scroll",
  },
  paper: {
    borderRadius: "20px",
    padding: "15px 15px",
  },
});

function Chat() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { user } = useSelector(authSelector);
  const [messageText, setMessage] = useState("");

  const onInputChange = (e) => {
    setMessage(e.target.value);
  };

  const onMessageSend = (e) => {
    if (messageText !== "") {
      socket.emit("send_message", {
        text: messageText,
        username: user.username,
      });
      setMessage("");
    }
  };

  const handleGetNewMessage = (newMessage) => {
    dispatch(sendMessage(newMessage));
  };

  const handleSetMessages = (items) => {
    dispatch(setMessages(items));
  };

  useEffect(() => {
    socket.emit("find_messages");
    socket.on("get_message", handleGetNewMessage);
    socket.on("get_messages", handleSetMessages);
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  return (
    <>
      <BackButton />
      <Typography className={classes.pageTitle} variant="h4" component="h4">
        Public chat
      </Typography>
      <Grid>
        <Paper className={classes.paper} elevation={3}>
          <MessageList classes={classes.msgList}></MessageList>
          <Container className={classes.msgInputContainer}>
            <TextField
              id="standard-full-width"
              className={classes.msgField}
              placeholder="Write something..."
              value={messageText}
              onChange={onInputChange}
              margin="normal"
              autoComplete="off"
            />
            <SendMessageButton
              message={messageText}
              onMessageSend={onMessageSend}
            />
          </Container>
        </Paper>
      </Grid>
    </>
  );
}

export default Chat;

import React, { useState } from "react";
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
import { sendMessage } from "../redux/actions/chat";
import { authSelector } from "../redux/selectors";

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
      dispatch(
        sendMessage({
          id: `${user.username}_${new Date()}`,
          text: messageText,
          username: user.username,
          createdAt: new Date(),
        })
      );
      setMessage("");
    }
  };

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

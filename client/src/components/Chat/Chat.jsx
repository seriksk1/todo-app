import React from "react";

import { Grid, TextField, Container, Paper } from "@material-ui/core";
import {
  MessageList,
  SendMessageButton,
  AcceptEditMessageButton,
  CancelEditMessageButton,
} from "../../components";
import useStyles from "./chat-style";

function Chat({
  messageText,
  onMessageSend,
  onInputChange,
  onEditAccept,
  onEditCancel,
  isEditingMessage,
}) {
  const classes = useStyles();

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      if (isEditingMessage) {
        onEditAccept();
      } else {
        onMessageSend(e);
      }
    }
  };

  return (
    <Grid className={classes.chat}>
      <Paper className={classes.paper} elevation={3}>
        <MessageList classes={classes.msgList} onMessageSend={onMessageSend} />
        <Container className={classes.msgInputContainer}>
          {isEditingMessage ? (
            <CancelEditMessageButton onEditCancel={onEditCancel} />
          ) : null}

          <TextField
            id="message"
            autoFocus
            className={classes.msgField}
            placeholder="Write something..."
            fullWidth
            value={messageText}
            onKeyPress={handleEnterKeyPress}
            onChange={onInputChange}
            margin="normal"
            autoComplete="off"
          />

          {isEditingMessage ? (
            <AcceptEditMessageButton onEditAccept={onEditAccept} />
          ) : (
            <SendMessageButton
              message={messageText}
              onMessageSend={onMessageSend}
            />
          )}
        </Container>
      </Paper>
    </Grid>
  );
}

export default Chat;

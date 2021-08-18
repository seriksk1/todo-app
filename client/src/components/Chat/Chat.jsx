import React from "react";

import { Grid, TextField, Container, Paper } from "@material-ui/core";
import { MessageList, SendMessageButton } from "../../components";
import useStyles from "./chat-style";

function Chat({ messageText, onMessageSend, onInputChange }) {
  const classes = useStyles();

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onMessageSend(e);
    }
  };

  return (
    <Grid className={classes.chat}>
      <Paper className={classes.paper} elevation={3}>
        <MessageList classes={classes.msgList} />
        <Container className={classes.msgInputContainer}>
          <TextField
            id="message"
            className={classes.msgField}
            placeholder="Write something..."
            fullWidth
            value={messageText}
            onKeyPress={handleEnterKeyPress}
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
  );
}

export default Chat;

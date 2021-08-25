import React from "react";
import {
  Grid,
  TextField,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";

import useStyles from "./chat-style";
import {
  MessageList,
  SendMessageButton,
  AcceptEditMessageButton,
  CancelEditMessageButton,
} from "../../components";

function Chat({
  theme,
  prevMessage,
  messageText,
  isReplying,
  isEditingMessage,
  onInputChange,
  onMessageSend,
  onEditAccept,
  onEditCancel,
}) {
  const classes = useStyles(theme);

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

        {isReplying && (
          <Typography className={classes.repliedText}>
            {prevMessage.text}
          </Typography>
        )}

        <Container className={classes.msgInputContainer}>
          {(isEditingMessage || isReplying) && (
            <CancelEditMessageButton onEditCancel={onEditCancel} />
          )}

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

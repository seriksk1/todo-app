import React from "react";

import {
  Grid,
  TextField,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import SendIcon from "@material-ui/icons/Send";

import useStyles from "./chat-style";
import { MessageList, ButtonWithIcon } from "../../components";

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

  const handleMessageSend = () => {
    onMessageSend(messageText);
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
            <ButtonWithIcon onClick={onEditCancel} icon={<ClearIcon />} />
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
            <ButtonWithIcon onClick={onEditAccept} icon={<DoneIcon />} />
          ) : (
            <ButtonWithIcon onClick={handleMessageSend} icon={<SendIcon />} />
          )}
        </Container>
      </Paper>
    </Grid>
  );
}

export default Chat;

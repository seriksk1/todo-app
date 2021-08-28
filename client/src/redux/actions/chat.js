import { ACTION_CHAT } from "../constants";

export const addMessage = (message) => ({
  type: ACTION_CHAT.ADD_MESSAGE,
  payload: message,
});

export const deleteMessage = (id) => ({
  type: ACTION_CHAT.DELETE_MESSAGE,
  payload: id,
});

export const setCurrentMessage = (text) => ({
  type: ACTION_CHAT.SET_CURRENT_MESSAGE,
  payload: text,
});

export const setUsersCountInRoom = (count) => ({
  type: ACTION_CHAT.SET_USERS_COUNT_IN_CHAT,
  payload: count,
});

export const changeCurrentMessage = (message) => ({
  type: ACTION_CHAT.CHANGE_CURRENT_MESSAGE,
  payload: message,
});

export const startEditMessage = (message) => (dispatch) =>
  dispatch([
    setCurrentMessage(message),
    changeCurrentMessage(message.text),
    {
      type: ACTION_CHAT.START_EDIT_MESSAGE,
      payload: message,
    },
  ]);

export const startReplyMessage = (message) => (dispatch) =>
  dispatch([
    setCurrentMessage(message),
    {
      type: ACTION_CHAT.START_REPLY_MESSAGE,
    },
  ]);

export const finishMessage = () => ({
  type: ACTION_CHAT.FINISH_MESSAGE,
});

export const editMessage = (message) => ({
  type: ACTION_CHAT.EDIT_MESSAGE,
  payload: message,
});

export const setMessages = (items) => ({
  type: ACTION_CHAT.SET_MESSAGES,
  payload: items,
});

export const setChatTheme = (theme) => ({
  type: ACTION_CHAT.SET_THEME,
  payload: theme,
});

export const leaveFromChat = () => ({
  type: ACTION_CHAT.LEAVE_FROM_CHAT,
});

export const joinToChat = () => ({
  type: ACTION_CHAT.JOIN_TO_CHAT,
});

export const clearRoom = () => ({
  type: ACTION_CHAT.CLEAR_ROOM,
});

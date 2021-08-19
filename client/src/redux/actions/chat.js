import { ACTION_CHAT } from "../constants";

export const addMessage = (message) => ({
  type: ACTION_CHAT.ADD_MESSAGE,
  payload: message,
});

export const deleteMessage = (id) => ({
  type: ACTION_CHAT.DELETE_MESSAGE,
  payload: id,
});

export const changeCurrentMessage = (text) => ({
  type: ACTION_CHAT.CHANGE_CURRENT_MESSAGE,
  payload: text,
});

export const startEditMessage = (message) => ({
  type: ACTION_CHAT.START_EDIT_MESSAGE,
  payload: message,
});

export const finishEditMessage = () => ({
  type: ACTION_CHAT.FINISH_EDIT_MESSAGE,
});

export const editMessage = (message) => ({
  type: ACTION_CHAT.EDIT_MESSAGE,
  payload: message,
});

export const acceptEditMessage = (message) => (dispatch) => {
  dispatch([editMessage(message), finishEditMessage()]);
};

export const setMessages = (items) => ({
  type: ACTION_CHAT.SET_MESSAGES,
  payload: items,
});

export const setChatTheme = (theme) => ({
  type: ACTION_CHAT.SET_THEME,
  payload: theme,
});

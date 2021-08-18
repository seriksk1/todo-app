import { ACTION_CHAT } from "../constants";

export const addMessage = (message) => ({
  type: ACTION_CHAT.ADD_MESSAGE,
  payload: message,
});

export const setMessages = (items) => ({
  type: ACTION_CHAT.SET_MESSAGES,
  payload: items,
});

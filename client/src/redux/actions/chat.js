import { ACTION_CHAT } from "../constants";

export const sendMessage = (message) => ({
  type: ACTION_CHAT.SEND_MESSAGE,
  payload: message,
});

export const setMessages = (items) => ({
  type: ACTION_CHAT.SET_MESSAGES,
  payload: items,
});

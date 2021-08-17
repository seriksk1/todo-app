import { ACTION_CHAT } from "../constants";

export const sendMessage = (message) => ({
  type: ACTION_CHAT.SEND_MESSAGE,
  payload: message,
});

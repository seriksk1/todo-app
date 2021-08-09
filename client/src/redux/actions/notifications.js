import { ACTION_NOTIFICATIONS } from "../constants";

export const setMessage = (message) => ({
  type: ACTION_NOTIFICATIONS.SET_MESSAGE,
  payload: message,
});

export const cleanNotification = () => ({
  type: ACTION_NOTIFICATIONS.CLEAN,
});

export const showNotification = (notification) => (dispatch) => {
  dispatch(setMessage(notification.message));
};

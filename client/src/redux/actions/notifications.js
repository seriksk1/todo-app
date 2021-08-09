import { ACTION_NOTIFICATIONS } from "../constants";

export const setNotification = (notification) => ({
  type: ACTION_NOTIFICATIONS.SET_NOTIFICATION,
  payload: notification,
});

export const cleanNotification = () => ({
  type: ACTION_NOTIFICATIONS.CLEAN,
});

export const showNotification = (notification) => (dispatch) => {
  dispatch(setNotification(notification));
};

import { ACTION_NOTIFICATIONS } from "../constants";
import { toast } from "react-toastify";

export const setMessage = (message) => ({
  type: ACTION_NOTIFICATIONS.SET_MESSAGE,
  payload: message,
});

export const cleanNotification = () => ({
  type: ACTION_NOTIFICATIONS.CLEAN,
});

const showToast = (notification) => (dispatch) => {
  toast[notification.type](notification.message, {
    onClose: () => dispatch(cleanNotification()),
  });
};

export const showNotification = (notification) => (dispatch) => {
  dispatch([setMessage(notification.message), showToast(notification)]);
};

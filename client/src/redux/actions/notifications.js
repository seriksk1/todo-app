import { ACTION_NOTIFICATIONS } from "../constants";
import { toast } from "react-toastify";

export const setMessage = (message) => ({
  type: ACTION_NOTIFICATIONS.SET_MESSAGE,
  payload: message,
});

const createToast =
  ({ type, message }) =>
  (dispatch) => {
    toast[type](message, {
      onClose: () => dispatch(cleanNotification()),
    });
  };

export const showNotification = (notification) => (dispatch) => {
  dispatch([setMessage(notification.message), createToast(notification)]);
};

export const cleanNotification = () => ({
  type: ACTION_NOTIFICATIONS.CLEAN,
});

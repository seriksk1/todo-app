import { showNotification } from "../actions/notifications";
import { HTTP_STATUS, TOAST_OPTION } from "../constants";
import { logout } from "../actions/auth";

export const handleError = (status) => (dispatch) => {
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED: {
      dispatch([logout(), showNotification(TOAST_OPTION.USER.SESSION_TIMEOUT)]);
      break;
    }
    case HTTP_STATUS.INTERNAL_SERVER: {
      dispatch([showNotification(TOAST_OPTION.INTERNAL_SERVER)]);
      break;
    }
    default: {
      dispatch([showNotification(TOAST_OPTION.USER.ACTION_ERROR)]);
      break;
    }
  }
};

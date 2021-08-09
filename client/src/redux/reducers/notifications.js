import { ACTION_NOTIFICATIONS } from "../constants";

const initialState = {
  notification: {
    message: "",
    type: "",
  },
  isActive: false,
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NOTIFICATIONS.SET_NOTIFICATION: {
      return {
        ...state,
        notification: action.payload,
        isActive: true,
      };
    }

    case ACTION_NOTIFICATIONS.CLEAN: {
      return initialState;
    }

    default:
      return state;
  }
};

export default notifications;

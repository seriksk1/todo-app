import { ACTION_NOTIFICATIONS } from "../constants";

const initialState = {
  message: "",
  isActive: false,
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NOTIFICATIONS.SET_MESSAGE: {
      return {
        ...state,
        message: action.payload,
        isActive: true,
      };
    }

    case ACTION_NOTIFICATIONS.CLEAN: {
      return {
        ...state,
        message: "",
        isActive: false,
      };
    }

    default:
      return state;
  }
};

export default notifications;

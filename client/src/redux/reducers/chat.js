import { ACTION_CHAT } from "../constants";

const initialState = {
  items: [],
  isSending: null,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHAT.ADD_MESSAGE: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case ACTION_CHAT.SET_MESSAGES: {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};

export default chat;

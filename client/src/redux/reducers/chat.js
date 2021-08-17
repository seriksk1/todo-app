import { ACTION_CHAT } from "../constants";

const initialState = {
  items: [],
  isSending: null,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHAT.SEND_MESSAGE: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case ACTION_CHAT.REMOVE_MESSAGE: {
      const newItems = state.items.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        items: newItems,
      };
    }

    case ACTION_CHAT.CLEAR_MESSAGE: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default chat;

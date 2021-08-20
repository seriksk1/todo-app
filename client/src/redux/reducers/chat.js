import { ACTION_CHAT } from "../constants";

const initialState = {
  items: [],
  theme: null,
  isSending: false,
  currentMessage: { text: "" },
  isEditingMessage: false,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHAT.ADD_MESSAGE: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case ACTION_CHAT.DELETE_MESSAGE: {
      const newItems = state.items.filter(
        (item) => item._id !== action.payload
      );

      return {
        ...state,
        items: newItems,
      };
    }

    case ACTION_CHAT.CHANGE_CURRENT_MESSAGE: {
      return {
        ...state,
        currentMessage: {
          ...state.currentMessage,
          text: action.payload,
        },
      };
    }

    case ACTION_CHAT.EDIT_MESSAGE: {
      const newItems = state.items.map((item) => {
        if (item._id === action.payload._id) {
          item = action.payload;
        }
        return item;
      });

      return {
        ...state,
        items: newItems,
      };
    }

    case ACTION_CHAT.START_EDIT_MESSAGE: {
      return {
        ...state,
        isEditingMessage: true,
        currentMessage: action.payload,
      };
    }
    case ACTION_CHAT.FINISH_EDIT_MESSAGE: {
      return {
        ...state,
        isEditingMessage: false,
        currentMessage: { text: "" },
      };
    }
    case ACTION_CHAT.SET_MESSAGES: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case ACTION_CHAT.SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }

    default:
      return state;
  }
};

export default chat;

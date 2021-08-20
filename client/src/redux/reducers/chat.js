import { ACTION_CHAT } from "../constants";

const initialState = {
  items: [],
  theme: {
    bgImg:
      "url(https://telegram.org/file/464001326/1/eHuBKzF9Lh4.288899/1f135a074a169f90e5)",
    userMsgBgColor: "skyblue",
    infoMsgBgColor: "#d3ef81",
    msgInfoColor: "#ffffffd4",
  },
  isSending: false,
  currentMessage: { text: "" },
  isEditingMessage: false,
  isReplying: false,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHAT.ADD_MESSAGE: {
      return {
        ...state,
        items: [...state.items, action.payload],
        currentMessage: { text: "" },
        isEditingMessage: false,
        isReplying: false,
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

    case ACTION_CHAT.REPLY_MESSAGE: {
      return {
        ...state,
        isReplying: true,
      };
    }

    case ACTION_CHAT.FINISH_REPLY_MESSAGE: {
      return {
        ...state,
        isReplying: false,
      };
    }

    case ACTION_CHAT.START_EDIT_MESSAGE: {
      return {
        ...state,
        isEditingMessage: true,
      };
    }

    case ACTION_CHAT.SET_CURRENT_MESSAGE: {
      return {
        ...state,
        currentMessage: action.payload,
      };
    }

    case ACTION_CHAT.FINISH_EDIT_MESSAGE: {
      return {
        ...state,
        isEditingMessage: false,
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

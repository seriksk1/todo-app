import { ACTION } from "../constants";

const initialState = {
  items: [],
  sortType: "Due-date",
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_TASK: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case ACTION.REMOVE_TASK: {
      const newItems = state.items.filter(({ _id }) => _id !== action.payload);

      return {
        ...state,
        items: newItems,
      };
    }

    case ACTION.SET_TASK_STATUS: {
      const newItems = [
        ...state.items.filter(({ _id }) => _id !== action.payload._id),
        action.payload,
      ];

      return {
        ...state,
        items: newItems,
      };
    }

    case ACTION.SET_SORT_TYPE: {
      return {
        ...state,
        sortType: action.payload,
      };
    }

    case ACTION.SET_TASKS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};

export default tasks;

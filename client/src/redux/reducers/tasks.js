import { ACTION, SORT_BY } from "../constants";

const initialState = {
  items: [],
  sortType: SORT_BY.DUEDATE,
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
      const newItems = state.items.filter(
        ({ _id }) => _id !== action.payload._id
      );

      return {
        ...state,
        items: [...newItems, action.payload],
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

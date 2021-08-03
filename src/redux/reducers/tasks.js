const initialState = {
  items: [],
  sortType: "Due-date",
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_TYPE": {
      return {
        ...state,
        sortType: action.payload,
      };
    }

    case "SET_TASKS": {
      return {
        ...state,
        items: action.payload,
      };
    }

    case "ADD_TASK":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "REMOVE_TASK": {
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1),
        ],
      };
    }

    case "SET_TASK_STATUS": {
      let currentItem = state.items[action.payload];

      currentItem.status =
        currentItem.status === "overdue" || currentItem.status === "pending"
          ? "done"
          : "pending";

      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload),
          currentItem,
          ...state.items.slice(action.payload + 1),
        ],
      };
    }
    default:
      return state;
  }
};

export default tasks;

const initialState = {
  items: [],
  sortType: null,
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
      // another way

      // const oldItems = [...state.items];
      // let currentItem = oldItems[action.payload];

      // currentItem.status =
      //   currentItem.status === "overdue" || currentItem.status === "pending"
      //     ? "done"
      //     : "pending";

      // const newItems = [
      //   ...oldItems.slice(0, action.payload),
      //   currentItem,
      //   ...oldItems.slice(action.payload + 1),
      // ];

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

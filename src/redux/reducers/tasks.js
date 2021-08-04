const initialState = {
  items: [],
  sortType: 'Due-date',
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_TYPE': {
      return {
        ...state,
        sortType: action.payload,
      };
    }

    case 'SET_TASKS': {
      return {
        ...state,
        items: action.payload,
      };
    }

    case 'ADD_TASK': {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case 'REMOVE_TASK': {
      const oldItems = [...state.items];
      const newItems = oldItems.filter(({ _id }) => _id !== action.payload);

      return {
        ...state,
        items: newItems,
      };
    }

    case 'SET_TASK_STATUS': {
      const oldItems = [...state.items];
      const currentItem = oldItems.find(({ _id }) => _id === action.payload.id);
      currentItem.status = action.payload.status;

      const newItems = oldItems.filter(({ _id }) => _id !== action.payload.id);

      return {
        ...state,
        items: [...newItems, currentItem],
      };
    }
    default:
      return state;
  }
};

export default tasks;

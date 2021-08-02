const initialState = {
  items: [
    { id: 1, task: "do homework", status: "overdue", dueDate: "2021-08-01" },
    { id: 2, task: "wash your hands", status: "done", dueDate: "2021-08-04" },
    { id: 3, task: "make dinner", status: "pending", dueDate: "2021-08-05" },
    { id: 4, task: "watch film", status: "pending", dueDate: "2021-08-06" },
  ],
};

const tasks = (state = initialState, action) => {
  const oldItems = state.items;
  let newItems = [];

  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_TASK":
      newItems = oldItems.filter(({ id }) => id !== action.payload);
      return {
        ...state,
        items: newItems,
      };

    case "SET_TASK_STATUS":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default tasks;

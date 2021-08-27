import { ACTION_ROOMS } from "../constants";

const initialState = {
  items: [],
  currentRoom: { _id: localStorage.getItem("currentRoom") },
};

const rooms = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ROOMS.SET_ROOMS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case ACTION_ROOMS.ADD_ROOM: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case ACTION_ROOMS.SET_CURRENT_ROOM: {
      return {
        ...state,
        currentRoom: { ...action.payload },
      };
    }

    case ACTION_ROOMS.LEAVE_FROM_ROOM: {
      return {
        ...state,
        currentRoom: null,
      };
    }

    default:
      return state;
  }
};

export default rooms;

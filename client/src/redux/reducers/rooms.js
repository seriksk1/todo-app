import { ACTION_ROOMS } from "../constants";

const initialState = {
  items: [],
  currentRoomId: null,
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
        currentRoomId: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rooms;

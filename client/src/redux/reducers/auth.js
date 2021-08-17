import { ACTION_AUTH } from "../constants";

const initialState = {
  user: {
    username: "",
  },
  authorized: !!localStorage.getItem("token"),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_AUTH.AUTHORIZED: {
      return {
        ...state,
        authorized: true,
      };
    }

    case ACTION_AUTH.LOGOUT: {
      return {
        ...state,
        authorized: false,
      };
    }

    case ACTION_AUTH.SET_USER_DATA: {
      return {
        ...state,
        user: { ...state.user, username: action.payload.username },
      };
    }

    default:
      return state;
  }
};

export default auth;

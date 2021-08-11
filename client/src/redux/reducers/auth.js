import { ACTION_AUTH } from "../constants";

const initialState = {
  email: null,
  password: null,
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

    default:
      return state;
  }
};

export default auth;

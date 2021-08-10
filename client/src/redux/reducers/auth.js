import { ACTION_AUTH } from "../constants";

const initialState = {
  email: null,
  password: null,
  authorized: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_AUTH.REGISTER: {
      const { email, password } = action.payload;
      return {
        ...state,
        email: email,
        password: password,
      };
    }

    case ACTION_AUTH.LOGIN: {
      const { email, password } = action.payload;
      return {
        ...state,
        email: email,
        password: password,
      };
    }

    case ACTION_AUTH.AUTHORIZED: {
      return {
        ...state,
        authorized: true,
      };
    }

    default:
      return state;
  }
};

export default auth;

import { combineReducers } from "redux";

import auth from "./auth";
import tasks from "./tasks";
import notifications from "./notifications";
import chat from "./chat";

const rootReducer = combineReducers({
  auth,
  tasks,
  notifications,
  chat,
});

export default rootReducer;

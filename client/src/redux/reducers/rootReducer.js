import { combineReducers } from "redux";

import auth from "./auth";
import tasks from "./tasks";
import notifications from "./notifications";

const rootReducer = combineReducers({
  auth,
  tasks,
  notifications,
});

export default rootReducer;

import { combineReducers } from "redux";

import auth from "./auth";
import tasks from "./tasks";
import notifications from "./notifications";
import chat from "./chat";
import rooms from "./rooms";

const rootReducer = combineReducers({
  auth,
  tasks,
  notifications,
  chat,
  rooms,
});

export default rootReducer;

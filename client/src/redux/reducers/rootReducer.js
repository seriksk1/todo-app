import { combineReducers } from "redux";
import tasks from "./tasks";
import notifications from "./notifications";

const rootReducer = combineReducers({
  tasks,
  notifications,
});

export default rootReducer;

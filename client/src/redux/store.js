import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import multi from "redux-multi";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, multi))
);

export default store;

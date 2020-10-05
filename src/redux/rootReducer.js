import { combineReducers, createStore } from "redux";

const rootReducers = combineReducers({
  //states
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

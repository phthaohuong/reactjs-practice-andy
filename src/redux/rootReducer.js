import { combineReducers, createStore } from "redux";
import phonesReducer from "./reducers/phones";
import cartReducers from "./reducers/cart";

const rootReducers = combineReducers({
  //states
  phonesReducer,
  cartReducers,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import itemsReducer from "../reducers/items";
import filtersReducer from "../reducers/filters";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      items: itemsReducer,
      filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;

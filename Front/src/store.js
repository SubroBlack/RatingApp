import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import itemsReducer from "./reducers/items";
import loginReducer from "./reducers/login";

const reducer = combineReducers({
  items: itemsReducer,
  logged: loginReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

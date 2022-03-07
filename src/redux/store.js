import tableReducer from "./reducers/tableReducer";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    table: tableReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
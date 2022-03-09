import tableReducer from "./reducers/tableReducer";
import inputListReducer from "./reducers/inputList";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    table: tableReducer,
    inputList: inputListReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
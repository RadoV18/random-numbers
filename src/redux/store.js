import tableReducer from "./reducers/tableReducer";
import inputListReducer from "./reducers/inputList";
import messageReducer from "./reducers/messages";
import modalReducer from "./reducers/modal";
import errorReducer from "./reducers/error";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    table: tableReducer,
    inputList: inputListReducer,
    messages: messageReducer,
    modal: modalReducer,
    error: errorReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;
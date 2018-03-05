import thunk from "redux-thunk";
import reducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleware = createLogger();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)));

export default store;

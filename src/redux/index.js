import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const reduxLogger = createLogger();

export default createStore(reducers, applyMiddleware(thunk, reduxLogger));

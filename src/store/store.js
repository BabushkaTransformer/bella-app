import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const persistedState = localStorage.getItem("reduxState")
// 	? JSON.parse(localStorage.getItem("reduxState"))
// 	: {};

const composeEnhancers =
	(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
	let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
	return store;
};

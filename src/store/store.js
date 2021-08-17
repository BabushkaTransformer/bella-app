import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getFirebase } from "react-redux-firebase";

// вытаскиваем из localStorage наши продукты
const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const initState = { cart: { items: cartItems } };

// i have redux thunk, i have react dev tool.  aaaaaahhhhhh reduxthunkdevtools
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
	let store = createStore(rootReducer, initState, composeEnhancers(applyMiddleware(thunk.withExtraArgument(getFirebase))));
	return store;
};

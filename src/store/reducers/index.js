import { combineReducers } from "redux";
import products from "./productsReducer";
import categories from "./categoriesReducer";
import news from "./newsReducer";
import auth from "./authReducer";
import cart from "./cartReducer";
import orders from "./orderReducer";

export default combineReducers({
	orders,
	cart,
	auth,
	products,
	categories,
	news,
});

import { ADD_TO_CART, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_FROM_CART } from "./actioTypes";
import bella from "../../adapters/bella.config";

const addToCartSuccess = (cartItems) => ({ type: ADD_TO_CART, payload: { cartItems } });
const removeFormCartSuccess = (cartItems) => ({ type: REMOVE_FROM_CART, payload: { cartItems } });
const incrementItemSuccess = (cartItems) => ({ type: INCREMENT_ITEM, payload: { cartItems } });
const decrementItemSuccess = (cartItems) => ({ type: DECREMENT_ITEM, payload: { cartItems } });

// export const addToCart = (items, product) => (dispatch) => {
// 	const cartItems = items.slice();
// 	let productAlreadyInCart = false;

// 	cartItems.forEach((cp) => {
// 		if (cp.id === product.id) {
// 			cp.count += 1;
// 			productAlreadyInCart = true;
// 		}
// 	});

// 	if (!productAlreadyInCart) {
// 		cartItems.push({ ...product, count: 1 });
// 	}
// 	localStorage.setItem("cartItems", JSON.stringify(cartItems));
// 	dispatch(addToCartSuccess(cartItems));
// };

// export const removeFromCart = (items, id) => (dispatch) => {
// 	const cartItems = items.slice().filter((el) => el.id !== id);
// 	localStorage.setItem("cartItems", JSON.stringify(cartItems));
// 	dispatch(removeFormCartSuccess(cartItems));
// };

// export const incrementItem = (items, id) => (dispatch) => {
// 	const cartItems = items.slice().map((el) => (el.id === id ? { ...el, count: el.count + 1 } : el));
// 	localStorage.setItem("cartItems", JSON.stringify(cartItems));
// 	dispatch(incrementItemSuccess(cartItems));
// };

// export const decrementItem = (items, id) => (dispatch) => {
// 	const cartItems = items
// 		.slice()
// 		.map((el) => (el.id === id ? (el.count === 1 ? { ...el, count: 1 } : { ...el, count: el.count - 1 }) : el));
// 	localStorage.setItem("cartItems", JSON.stringify(cartItems));
// 	dispatch(decrementItemSuccess(cartItems));
// };

// auth man
export const fetchCartAs = (id) => (dispatch) => {
	const token = localStorage.getItem("token");
	if (token) {
		bella
			.get(`/bag/`)
			.then((response) => dispatch(addToCartSuccess(response.data.results)))
			.catch((err) => console.log(err.response));
	}
};
export const addToCartAs = (id) => (dispatch) => {
	const token = localStorage.getItem("token");
	if (token) {
		bella
			.post(`products/${id}/bag/`)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err.response));
	}
};
export const deleteFromCartAs = (id) => (dispatch) => {
	const token = localStorage.getItem("token");
	if (token) {
		bella
			.delete(`products/${id}/bag_delete/`)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err.response));
	}
};

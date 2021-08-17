import { ADD_TO_CART, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_FROM_CART } from "../actions/actioTypes";

const initialState = {
	items: [],
	bagItems: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { ...state, items: action.payload.cartItems };
		case REMOVE_FROM_CART:
			return { ...state, items: action.payload.cartItems };
		case INCREMENT_ITEM:
			return { ...state, items: action.payload.cartItems };
		case DECREMENT_ITEM:
			return { ...state, items: action.payload.cartItems };

		default:
			return state;
	}
};

export default cartReducer;

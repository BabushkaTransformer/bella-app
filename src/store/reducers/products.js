const initialState = {
	products: [],
	singleProduct: {},
	loading: true,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return {
				...state,
				products: action.payload,
			};
		case "FETCH_PRODUCT":
			return {
				...state,
				products: action.payload,
			};
		case "GET_PRODUCT_REQUEST":
			return {
				...state,
				loading: action.payload,
			};
		case "GET_PRODUCT_SUCCESS":
			return {
				...state,
				singleProduct: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

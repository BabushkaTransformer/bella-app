import {
	ADD_PRODUCT_STARTED,
	ADD_PRODUCT_SUCCESS,
	FETCH_PRODUCT_STARTED,
	FETCH_PRODUCT_SUCCESS,
	GET_PRODUCT_STARTED,
	GET_PRODUCT_SUCCESS,
	PRODUCT_FAILURE,
} from "../actions/actioTypes";

const initialState = {
	products: [],
	showProductds: [],
	singleProduct: {},
	loading: true,
	err: {},
	totalCount: 0,
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCT_STARTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCT_SUCCESS:
			return {
				...state,
				products: action.payload,
				loading: false,
			};
		case ADD_PRODUCT_STARTED:
			return {
				...state,
				loading: true,
			};
		case ADD_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case GET_PRODUCT_STARTED:
			return {
				...state,
				loading: true,
			};
		case GET_PRODUCT_SUCCESS:
			return {
				...state,
				singleProduct: action.payload,
				loading: false,
			};
		case PRODUCT_FAILURE:
			return {
				...state,
				err: action.payload,
				loading: false,
			};
		case "GET_TOTAL_COUNT":
			return {
				...state,
				totalCount: action.payload,
			};
		case "PRODUCT_PAGINATION":
			return {
				...state,
				showProductds: [...state.showProductds, ...action.payload],
			};
		default:
			return state;
	}
};

export default productsReducer;

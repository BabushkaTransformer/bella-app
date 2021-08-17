import {
	SINGLE_ORDER_SUCCESS,
	ORDER_ACTION_STARTED,
	FETCH_ORDERS_SUCCESS,
	ORDER_ACTION_FAILURE,
	SET_ORDER_SUCCESS,
} from "../actions/actioTypes";

const initialState = {
	loading: false,
	orders: [],
	singleOrder: {},
	err: {},
};

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ORDER_ACTION_STARTED:
			return {
				...state,
				loading: true,
			};

		case FETCH_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.payload,
				loading: false,
			};
		case SET_ORDER_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case SINGLE_ORDER_SUCCESS:
			return {
				...state,
				singleOrder: action.payload,
				loading: false,
			};
		case ORDER_ACTION_FAILURE:
			return {
				...state,
				err: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default newsReducer;

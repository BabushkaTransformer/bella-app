import {
	ADD_CATEGORY_FAILURE,
	ADD_CATEGORY_STARTED,
	ADD_CATEGORY_SUCCESS,
	FETCH_CATEGORY_FAILURE,
	FETCH_CATEGORY_STARTED,
	FETCH_CATEGORY_SUCCESS,
} from "../actions/actioTypes";

const initialState = {
	categories: [],
	loading: false,
	err: {},
};

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CATEGORY_STARTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_CATEGORY_SUCCESS:
			return {
				...state,
				categories: action.payload,
				loading: false,
			};
		case FETCH_CATEGORY_FAILURE:
			return {
				...state,
				err: action.payload,
				loading: false,
			};
		case ADD_CATEGORY_STARTED:
			return {
				...state,
				loading: true,
			};
		case ADD_CATEGORY_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case ADD_CATEGORY_FAILURE:
			return {
				...state,
				err: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default categoriesReducer;

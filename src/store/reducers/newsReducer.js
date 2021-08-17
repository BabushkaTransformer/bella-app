import {
	ADD_NEWS_STARTED,
	FETCH_NEWS_STARTED,
	FETCH_NEWS_SUCCESS,
	GET_SINGLE_NEWS_STARTED,
	GET_SINGLE_NEWS_SUCCESS,
	NEWS_FAILURE,
} from "../actions/actioTypes";

const initialState = {
	news: [],
	loading: false,
	singleNews: {},
	err: {},
};

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NEWS_STARTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_NEWS_SUCCESS:
			return {
				...state,
				news: action.payload,
				loading: false,
			};
		case ADD_NEWS_STARTED:
			return {
				...state,
				loading: true,
			};

		case GET_SINGLE_NEWS_STARTED:
			return {
				...state,
				loading: true,
			};
		case GET_SINGLE_NEWS_SUCCESS:
			return {
				...state,
				singleNews: action.payload,
				loading: false,
			};
		case NEWS_FAILURE:
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

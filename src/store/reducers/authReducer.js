import { SET_AUTH, AUTH_STARTED, AUTH_SUCCESS, AUTH_FAILURE } from "../actions/actioTypes";

const initialState = {
	authErr: "",
	user: "",
	isAuth: false,
	loading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_STARTED:
			return {
				...state,
				loading: true,
			};
		case AUTH_SUCCESS:
			return {
				...state,
				authErr: "",
				user: action.payload,
				loading: false,
			};
		case AUTH_FAILURE:
			return {
				...state,
				authErr: action.payload,
				loading: false,
			};
		case SET_AUTH:
			return {
				...state,
				isAuth: action.payload,
			};

		default:
			return state;
	}
};

export default authReducer;

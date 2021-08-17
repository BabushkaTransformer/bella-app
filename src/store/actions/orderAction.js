import {
	SINGLE_ORDER_SUCCESS,
	FETCH_ORDERS_SUCCESS,
	SET_ORDER_SUCCESS,
	ORDER_ACTION_STARTED,
	ORDER_ACTION_FAILURE,
} from "./actioTypes";
import bella from "../../adapters/axios.config";

const orderActionStarted = () => ({ type: ORDER_ACTION_STARTED });
const fetchOrderSuccess = (data) => ({ type: FETCH_ORDERS_SUCCESS, payload: data });
const orderActionFailure = (err) => ({ type: ORDER_ACTION_FAILURE, payload: err });

const setOrderSuccess = () => ({ type: SET_ORDER_SUCCESS });
const getSingleOrderSuccess = (data) => ({ type: SINGLE_ORDER_SUCCESS, payload: data });

export const fetchOrder = () => (dispatch) => {
	dispatch(orderActionStarted());
	bella
		.get("/orders.json")
		.then((response) => dispatch(fetchOrderSuccess(response.data)))
		.catch((err) => dispatch(orderActionFailure(err.response)));
};

export const setOrder = (category, history) => (dispatch) => {
	dispatch(orderActionStarted());
	bella
		.post("/orders.json/", category)
		.then((response) => {
			history.push("/orders");
			dispatch(setOrderSuccess());
		})
		.catch((err) => dispatch(orderActionFailure(err.response)));
};

export const getSingleOrder = (id) => (dispatch) => {
	dispatch(orderActionStarted());
	bella
		.get(`/orders/${id}.json`)
		.then((response) => dispatch(getSingleOrderSuccess(response.data)))
		.catch((err) => {
			dispatch(orderActionFailure(err.response));
		});
};

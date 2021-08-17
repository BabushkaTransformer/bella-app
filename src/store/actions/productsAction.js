import {
	FETCH_PRODUCT_STARTED,
	FETCH_PRODUCT_SUCCESS,
	GET_PRODUCT_STARTED,
	GET_PRODUCT_SUCCESS,
	PRODUCT_FAILURE,
} from "./actioTypes";
import bella from "../../adapters/bella.config";

const fetchProductStarted = () => ({ type: FETCH_PRODUCT_STARTED });
const fetchProductSuccess = (data) => ({ type: FETCH_PRODUCT_SUCCESS, payload: data });
const fetchProductFailure = (err) => ({ type: PRODUCT_FAILURE, payload: err });
const getSingleProductSuccess = (data) => ({ type: GET_PRODUCT_SUCCESS, payload: data });
const getTotalCount = (count) => ({ type: "GET_TOTAL_COUNT", payload: count });

export const fetchProduct = (page, page_size, visibleProducts, setVisibleProducts) => (dispatch) => {
	dispatch(fetchProductStarted());
	bella
		.get(`/products/?page=${page}&page_size=${page_size}`)
		.then((response) => {
			setVisibleProducts([...visibleProducts, ...response.data.results]);
			dispatch(fetchProductSuccess(response.data.results));
			dispatch(getTotalCount(response.data.count));
		})
		.catch((err) => dispatch(fetchProductFailure(err.response)));
};

export const getSingleProduct = (id) => (dispatch) => {
	dispatch({ type: GET_PRODUCT_STARTED });
	bella
		.get(`/products/${id}/`)
		.then((response) => dispatch(getSingleProductSuccess(response.data)))
		.catch((err) => dispatch(fetchProductFailure(err.response)));
};

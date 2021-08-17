import { FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_STARTED, FETCH_CATEGORY_SUCCESS } from "./actioTypes";
import bella from "../../adapters/bella.config";

const fetchCategoryStarted = () => ({ type: FETCH_CATEGORY_STARTED });
const fetchCategorySuccess = (data) => ({ type: FETCH_CATEGORY_SUCCESS, payload: data });
const fetchCategoryFailure = (err) => ({ type: FETCH_CATEGORY_FAILURE, payload: err });

export const fetchCategory = () => (dispatch) => {
	dispatch(fetchCategoryStarted());
	bella
		.get("/categories/")
		.then((response) => dispatch(fetchCategorySuccess(response.data.results)))
		.catch((err) => dispatch(fetchCategoryFailure(err.response)));
};

// export const addCategory = (category) => (dispatch) => {
// 	dispatch({ type: ADD_CATEGORY_STARTED });
// 	bella
// 		.post("/categories/", category)
// 		.then((response) => dispatch({ type: ADD_CATEGORY_SUCCESS }))
// 		.catch((err) => dispatch({ type: ADD_CATEGORY_FAILURE, payload: err.response }));
// };

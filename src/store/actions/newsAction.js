import {
	FETCH_NEWS_STARTED,
	FETCH_NEWS_SUCCESS,
	NEWS_FAILURE,
	GET_SINGLE_NEWS_SUCCESS,
	GET_SINGLE_NEWS_STARTED,
} from "./actioTypes";
import bella from "../../adapters/bella.config";

const fetchNewsStarted = () => ({ type: FETCH_NEWS_STARTED });
const fetchNewsSuccess = (data) => ({ type: FETCH_NEWS_SUCCESS, payload: data });
const newsFailure = (err) => ({ type: NEWS_FAILURE, payload: err });

const getSingleNewsSuccess = (data) => ({ type: GET_SINGLE_NEWS_SUCCESS, payload: data });

export const fetchNews = () => (dispatch) => {
	dispatch(fetchNewsStarted());
	bella
		.get("/news/")
		.then((response) => dispatch(fetchNewsSuccess(response.data.results)))
		.catch((err) => dispatch(newsFailure(err.response)));
};

export const getSingleNews = (id) => (dispatch) => {
	dispatch(fetchNewsStarted());
	bella
		.get(`/news/${id}/`)
		.then((response) => dispatch(getSingleNewsSuccess(response.data)))
		.catch((err) => dispatch(newsFailure(err.response)));
};

// export const addNews = (news) => (dispatch) => {
// 	dispatch({ type: ADD_NEWS_STARTED });
// 	bella
// 		.post("/news.json/", news)
// 		.then((response) => dispatch({ type: ADD_NEWS_SUCCESS }))
// 		.catch((err) => dispatch({ type: NEWS_FAILURE, payload: err.response }));
// };

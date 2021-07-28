import bella from "../../adapters/axios.config";

export const fetchProduct = () => (dispatch) => {
	bella
		.get("/products.json")
		.then((response) => {
			dispatch({ type: "FETCH_PRODUCT", payload: response.data });
		})
		.catch((err) => console.log(err.response));
};

export const addProduct = (product) => (dispatch) => {
	bella
		.post("/products.json/", product)
		.then((response) => window.location.reload())
		.catch((err) => console.log(err.response));
};

export const getProduct = (id) => (dispatch) => {
	dispatch({ type: "GET_PRODUCT_REQUEST", payload: true });
	bella
		.get(`/products/${id}.json`)
		.then((response) => dispatch({ type: "GET_PRODUCT_SUCCESS", payload: response.data }))
		.catch((err) => dispatch({ type: "GET_PRODUCT_FAILURE", payload: err.response }));
};

import axios from "axios";
const { REACT_APP_BELLA_URL } = process.env;

let token = JSON.parse(localStorage.getItem("token"));

const instance = axios.create({
	baseURL: REACT_APP_BELLA_URL,
	headers: {
		Authorization: token ? `Token ${token.access}` : "",
	},
});

export default instance;

import axios from "axios";

const { REACT_APP_BELLA_URL } = process.env;

const instance = axios.create({
	baseURL: REACT_APP_BELLA_URL,
});

export default instance;

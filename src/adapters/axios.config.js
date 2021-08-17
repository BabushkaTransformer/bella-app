import axios from "axios";

const instance = axios.create({
	baseURL: "https://bella-app-6fea8-default-rtdb.firebaseio.com/",
});

export default instance;

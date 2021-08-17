import { SET_AUTH, AUTH_STARTED, AUTH_SUCCESS, AUTH_FAILURE } from "../actions/actioTypes";
import bella from "../../adapters/bella.config";

const authStarted = () => ({ type: AUTH_STARTED });
const setAuth = (bool) => ({ type: SET_AUTH, payload: bool });
const authFailure = (err) => ({ type: AUTH_FAILURE, payload: err });
const loginUser = (user) => ({ type: AUTH_SUCCESS, payload: user });

export const signIn = (user) => {
	return (dispatch) => {
		dispatch(authStarted());
		bella
			.post("/login/", user)
			.then((response) => {
				localStorage.setItem("token", JSON.stringify({ access: response.data.access, refresh: response.data.refresh }));
				dispatch(setAuth(true));
				dispatch(
					loginUser({
						first_name: response.data.first_name,
						last_name: response.data.last_name,
						phone_number: response.data.phone_number,
					})
				);
				// window.location.reload();
			})
			.catch((err) => {
				console.log(err.response);
				dispatch(authFailure(err.response.data.non_field_errors[0]));
			});
	};
};

export const signUp = (user) => {
	return (dispatch) => {
		dispatch(authStarted());
		bella
			.post("/register/", user)
			.then((response) => {
				localStorage.setItem("token", JSON.stringify({ access: response.data.access, refresh: response.data.refresh }));
				dispatch(setAuth(true));
				dispatch(
					loginUser({
						first_name: response.data.first_name,
						last_name: response.data.last_name,
						phone_number: response.data.phone_number,
					})
				);
				console.log(response);
				// window.location.reload();
			})
			.catch((err) => {
				console.log(err.response);
				dispatch(authFailure(err.response.data));
			});
	};
};

export const signOut = () => {
	return (dispatch) => {
		dispatch(authStarted());

		localStorage.removeItem("token");
		dispatch(setAuth(true));
		dispatch(loginUser({}));
		window.location.reload();
	};
};

// export const refreshing = () => (dispatch) => {
// 	const token = JSON.parse(localStorage.getItem("token"));
// 	axios
// 		.get("http://34.125.150.112/profile/", {
// 			headers: {
// 				Authorization: `Token ${token.access}`,
// 			},
// 		})
// 		.then((response) => console.log(response))
// 		.catch((err) => {
// 			if (err.code === 401) {
// 				axios.get(`http://34.125.150.112/profile/${token.refresh}`).then(res => {
// 					localStorage.setItem("token", response.data)
// 				}).catch(err => dispatch(logout()));
// 			}
// 		});
// };

// firebase

// export const signIn = (credentials, history) => {
// 	return (dispatch, getState, getFirebase) => {
// 		dispatch({ type: AUTH_STARTED });
// 		const firebase = getFirebase();
// 		firebase
// 			.auth()
// 			.signInWithEmailAndPassword(credentials.email, credentials.password)
// 			.then((res) => {
// 				if (res) history.push("/");
// 				dispatch({ type: LOGIN_SUCCESS });
// 				window.location.reload();
// 			})
// 			.catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err }));
// 	};
// };

// export const signOut = () => {
// 	return (dispatch, getState, getFirebase) => {
// 		dispatch({ type: AUTH_STARTED });
// 		const firebase = getFirebase();
// 		firebase
// 			.auth()
// 			.signOut()
// 			.then((res) => {
// 				dispatch({ type: SIGNOUT_SUCCESS });
// 				window.location.reload();
// 			})
// 			.catch((err) => dispatch({ type: SIGNOUT_FAILURE, payload: err }));
// 	};
// };

// export const signUp = (newUser) => {
// 	return (dispatch, getState, getFirebase) => {
// 		dispatch({ type: AUTH_STARTED });
// 		const firebase = getFirebase();
// 		firebase
// 			.auth()
// 			.createUserWithEmailAndPassword(newUser.email, newUser.password)
// 			.then((userCredential) => {
// 				userCredential.user.sendEmailVerification();
// 				firebase.auth().signOut();
// 				alert("Email sent");
// 				dispatch({ type: SIGNUP_SUCCESS });
// 				window.location.reload();
// 			})
// 			.catch((err) => dispatch({ type: SIGNUP_FAILURE, payload: err }));
// 	};
// };

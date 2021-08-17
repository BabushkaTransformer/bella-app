import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/actions/authAction";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";

const SignIn = (props) => {
	const dispatch = useDispatch();
	const authErr = useSelector((state) => state.auth.authErr);

	const [error, setError] = useState("");
	const [user, setUser] = useState({
		phone_number: "",
		password: "",
		password2: "",
	});

	const handleSubmit = (e) => {
		if (user.password === user.password2) {
			e.preventDefault();

			setError("");
			dispatch(signUp(user));
		} else {
			setError("Passwords not match!");
		}
	};

	// const regis = () => {
	// 	axios.post('http://34.125.150.112')
	// }

	return (
		<ModalWrapper active={props.active} setActive={props.setActive}>
			<h2>Регистрация</h2>

			<label>Ваш телефон</label>
			<input type="text" placeholder="Ваш телефон" onChange={(e) => setUser({ ...user, phone_number: e.target.value })} />
			<label>Введите пароль</label>
			<input type="number" placeholder="Ваш пароль" onChange={(e) => setUser({ ...user, password: e.target.value })} />
			<label>Повторно введите пароль</label>
			<input type="number" placeholder="Еще разок" onChange={(e) => setUser({ ...user, password2: e.target.value })} />

			<button onClick={(e) => handleSubmit(e)}>Продолжить</button>
			<span>{error ? error : null}</span>
			<span>{authErr ? authErr : null}</span>
		</ModalWrapper>
	);
};

export default SignIn;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signIn } from "../../store/actions/authAction";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";

const SignIn = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const message = useSelector((state) => state.auth.authErr);
	const loading = useSelector((state) => state.auth.loading);

	const [user, setUser] = useState({
		phone_number: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signIn(user, history));
	};

	return (
		<ModalWrapper active={props.active} setActive={props.setActive}>
			<h2>Вход</h2>
			<label>Ваш email</label>
			<input
				type="text"
				placeholder="Ваш email плиз"
				id="email"
				onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
			/>
			<label>Ваша пароль</label>
			<input
				type="number"
				placeholder="Ваш пароль"
				id="password"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<button onClick={(e) => handleSubmit(e)}> {loading ? <ButtonSpinner /> : "Продолжить"}</button>
			<span>{message ? message : null}</span>
		</ModalWrapper>
	);
};

export default SignIn;

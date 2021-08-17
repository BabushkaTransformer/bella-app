import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct/CartProduct";
import classes from "./CartPage.module.scss";
import ProductList from "../../components/ProductList/ProductList";
import { setOrder } from "../../store/actions/orderAction";
import ButtonSpinner from "../../components/UI/ButtonSpinner/ButtonSpinner";
import { useHistory } from "react-router";
import { Formik } from "formik";
import * as yup from "yup";

const CartPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const bagId = useSelector((state) => state.cart.items);
	const items = useSelector((state) => state.products.products);
	const loading = useSelector((state) => state.orders.loading);

	const [isPresent, setIsPresent] = useState(false);
	const [customer, setСustomer] = useState({
		name: "",
		surname: "",
		phone: "",
		country: "",
		city: "",
	});

	useEffect(() => {
		const obj = JSON.parse(localStorage.getItem("customer"));
		if (obj?.name && obj?.phone) {
			setIsPresent(true);
			setСustomer(obj);
		}
	}, []);

	let bagItems = [];
	if (items.length) {
		items.forEach((a) => {
			return bagId.forEach((b) => {
				if (a.id === b.product) bagItems.push({ ...a, quantity: b.quantity });
			});
		});
	}

	const validationSchema = yup.object().shape({
		name: yup.string().typeError("Должно быть строкой").max(15, "Больше 15!").required("Обязательно"),
		surname: yup.string().typeError("Должно быть строкой").max(15, "Больше 15!").required("Обязательно"),
		country: yup.string().typeError("Должно быть строкой").max(15, "Больше 15!").required("Обязательно"),
		city: yup.string().typeError("Должно быть строкой").max(15, "Больше 15!").required("Обязательно"),
		phone: yup
			.number()
			.typeError("Должно быть числом")
			.required("Обязательно")
			.test((phone) => phone?.toString().length === 12),
	});

	const setCustomerHandler = (values) => {
		localStorage.setItem("customer", JSON.stringify(values));
		setСustomer(values);
		setIsPresent(true);
	};

	const orderHandler = (e) => {
		let obj = {
			customer,
			orders: bagItems,
		};
		if (isPresent) dispatch(setOrder(obj, history));
	};

	return (
		<>
			{bagItems.length ? (
				<div className={classes.Container}>
					<div className={classes.Left}>
						<div className={classes.Title}>Оформление заказа</div>
						<div className={classes.Top}>
							{isPresent ? (
								<div className={classes.CustomerPresent}>
									<h3>Адрес доставки</h3>
									<div className={classes.FormRow}>
										<span>{`${customer.name} ${customer.surname}`}</span>
										<span>{customer.phone}</span>
									</div>
									<div className={classes.FormRow}>
										<span>{customer.country}</span>
										<span>{customer.city}</span>
									</div>
									<div className={classes.FormInput} onClick={() => setIsPresent(false)}>
										<button>Редактировать</button>
									</div>
								</div>
							) : (
								<Formik
									initialValues={
										!isPresent ? customer : { name: "", surname: "", phone: "", country: "", city: "" }
									}
									validationSchema={validationSchema}
									onSubmit={(values) => setCustomerHandler(values)}
								>
									{({ values, handleBlur, handleChange, isValid, handleSubmit }) => (
										<form className={classes.Form}>
											<div className={classes.FormRow}>
												<div className={classes.FormInput}>
													<label htmlFor="name">Ваше имя</label>
													<input
														type="text"
														id="name"
														name="name"
														placeholder="Нур"
														value={values.name}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
												<div className={classes.FormInput}>
													<label htmlFor="surname">Ваша фамилия</label>
													<input
														type="text"
														required=""
														id="surname"
														name="surname"
														placeholder="Султан"
														value={values.surname}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
											</div>
											<div className={classes.FormRow}>
												<div className={classes.FormInput}>
													<label htmlFor="phone">Номер телефона</label>
													<input
														type="number"
														id="phone"
														name="phone"
														placeholder="+996707772525"
														value={values.phone}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
												<div className={classes.FormInput}>
													<label htmlFor="country">Страна</label>
													<input
														type="text"
														id="country"
														name="country"
														placeholder="Кыргызстан"
														value={values.country}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
											</div>
											<div className={classes.FormRow}>
												<div className={classes.FormInput}>
													<label htmlFor="city">Город</label>
													<input
														type="text"
														required=""
														id="city"
														name="city"
														placeholder="Бишкек"
														value={values.city}
														onChange={handleChange}
														onBlur={handleBlur}
													/>
												</div>
												<div className={classes.FormInput}>
													<button onClick={handleSubmit} disabled={!isValid}>
														Сохранить адрес
													</button>
												</div>
											</div>
										</form>
									)}
								</Formik>
							)}
						</div>
						<div className={classes.Bottom}>
							<h3>Состав заказа</h3>

							{bagItems.map((item) => {
								return <CartProduct key={item.id} {...item} />;
							})}
						</div>
					</div>
					<div className={classes.Right}>
						<div className={classes.Total}>
							<div className={classes.TotalContent}>
								<h2>Итого </h2>
								<div className={classes.Checkpoint}>
									Общая сумма{" "}
									<span>{bagItems.reduce((total, item) => total + +item.price * +item.quantity, 0)} c.</span>
								</div>
								<div className={classes.Checkpoint}>
									Скидка{" "}
									<span>
										{bagItems.reduce(
											(total, item) => total + +item.price * +item.quantity - +item.price * +item.quantity,
											0
										)}{" "}
										c.
									</span>
								</div>
								<div className={classes.Checkpoint}>
									Итог
									<span>{bagItems.reduce((total, item) => total + +item.price * +item.quantity, 0)} c.</span>
								</div>

								<button className={classes.Btn} onClick={() => orderHandler()} disabled={!isPresent}>
									{loading ? <ButtonSpinner /> : "Оформить заказ"}
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className={classes.EmptyCart}>
					<h1>Ваша корзина пуста</h1>
					<ProductList title="Хит продаж" />
				</div>
			)}
		</>
	);
};

export default CartPage;

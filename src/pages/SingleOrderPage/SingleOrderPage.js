import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CartProduct from "../../components/CartProduct/CartProduct";
import Spinner from "../../components/UI/Spinner/Spinner";
import { getSingleOrder } from "../../store/actions/orderAction";

import classes from "./SingleOrderPage.module.scss";

const SingleOrderPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const singleOrder = useSelector((state) => state.orders.singleOrder);

	useEffect(() => {
		dispatch(getSingleOrder(id));
	}, [dispatch, id]);

	let orders, customer;

	if (!singleOrder.orders && !singleOrder.customer) {
		orders = <Spinner />;
		customer = <Spinner />;
	} else {
		orders = singleOrder.orders.map((el, index) => {
			return <CartProduct order key={index} {...el} />;
		});
		customer = (
			<div className={classes.Recipient}>
				<div className={classes.Info}>
					Получатель:{" "}
					<span>
						{singleOrder.customer.name} {singleOrder.customer.surname}
					</span>
					<span>{singleOrder.customer.phone}</span>
				</div>
				<div className={classes.Info}>
					Адрес доставки: <span>{singleOrder.customer.city}</span>
					<span>{singleOrder.customer.country}</span>
				</div>
				<div className={classes.Info}>
					К оплате: <span>{singleOrder.orders.reduce((sum, el) => +el.price * +el.count + sum, 0)} c.</span>
				</div>
			</div>
		);
	}

	return (
		<div className={classes.Container}>
			<h1>Заказ 100002 / Доставлено</h1>
			{orders}
			{customer}
		</div>
	);
};

export default SingleOrderPage;

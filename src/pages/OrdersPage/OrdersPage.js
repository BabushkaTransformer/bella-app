import React, { useEffect } from "react";
import classes from "./OrdersPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../store/actions/orderAction";
import { useHistory } from "react-router";
import { SINGLE_ORDER_ROUTE } from "../../routes";

const OrdersPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const orders = useSelector((state) => state.orders.orders);

	useEffect(() => {
		dispatch(fetchOrder());
	}, [dispatch]);

	const ordersArray = Object.entries(orders)
		.reverse()
		.map(([name, value]) => {
			return {
				id: name,
				...value,
			};
		});

	let myOrders;
	if (orders) {
		myOrders = ordersArray.map((el) => {
			return (
				<div className={classes.Order} key={el.id}>
					<div className={classes.Top}>
						<div className={classes.Delivered} onClick={() => history.push(`${SINGLE_ORDER_ROUTE}/${el.id}`)}>
							Заказ {el.id} <span>Доставлен</span>
						</div>
						<div className={classes.Date}>24/03/2020</div>
					</div>
					<div className={classes.Bottom}>
						<div className={classes.Img}>
							{el.orders.map((order, index) => {
								return <img key={index} src={order.img} alt="товар" />;
							})}
						</div>
						<div className={classes.Price}>22222 c.</div>
					</div>
				</div>
			);
		});
	}

	return (
		<div className={classes.Container}>
			<h1>Мои заказы </h1>
			<div className={classes.Orders}>{myOrders}</div>
		</div>
	);
};

export default OrdersPage;

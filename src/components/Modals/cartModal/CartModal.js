import React, { useEffect } from "react";
import classes from "./CartModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../CartProduct/CartProduct";
import { useHistory } from "react-router";
import { CART_PAGE_ROUTE } from "../../../routes";
import { fetchCartAs } from "../../../store/actions/cartAction";

const CartModal = ({ active, setActive }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const bagId = useSelector((state) => state.cart.items);
	const items = useSelector((state) => state.products.products);

	let bagItems = [];
	if (items.length) {
		items.forEach((a) => {
			return bagId.forEach((b) => {
				if (a.id === b.product) bagItems.push({ ...a, quantity: b.quantity });
			});
		});
	}

	useEffect(() => {
		dispatch(fetchCartAs());
	}, []);

	const goToCart = () => {
		setActive(false);
		history.push(CART_PAGE_ROUTE);
	};

	let productCart;
	if (items.length && bagItems.length) {
		productCart = bagItems.map((item) => {
			return <CartProduct key={item.id} {...item} />;
		});
	} else {
		productCart = <div className={classes.Empty}>Ваша корзина пуста</div>;
	}

	return (
		<>
			<div className={active ? classes.Cart + " " + classes.Active : classes.Cart} onClick={() => setActive(false)}>
				<div
					className={active ? classes.CartContent + " " + classes.Active : classes.CartContent}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={classes.Top}>{productCart}</div>
					<div className={classes.Bottom}>
						<div className={classes.Checkpoint}>
							Всего товаров : <span>{bagItems.reduce((sum, el) => sum + el.quantity, 0)}</span>
						</div>
						<div className={classes.Checkpoint}>
							Итого: <span>{bagItems.reduce((sum, el) => sum + +el.price * +el.quantity, 0)} c.</span>
						</div>
						<button className={classes.Btn} onClick={() => goToCart()}>
							Оформить заказ
						</button>
						<span className={classes.Text} onClick={() => setActive(false)}>
							Продолжить покупки
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartModal;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCartAs } from "../../store/actions/cartAction";
import testImg from "../../assets/img/product/product1.png";
import plus from "../../assets/img/icons/plus.png";
import minus from "../../assets/img/icons/minus.png";
import classes from "./CartProduct.module.scss";

const CartProduct = ({ title, id, preview, quantity, price, order, size, color }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);

	const reduceProduct = () => {
		// dispatch(decrementItem(items, id));
	};
	const increaseProduct = () => {
		// dispatch(incrementItem(items, id));
	};

	return (
		<div className={classes.Item}>
			<div className={classes.Left}>
				<img src={preview ? preview : testImg} alt="product" />
			</div>
			<div className={classes.Right}>
				{/*  */}
				{order ? (
					""
				) : (
					<div className={classes.Close} onClick={() => dispatch(deleteFromCartAs(id))}>
						{" "}
						X
					</div>
				)}
				{/*  */}
				<h2>{title}</h2>
				<div className={classes.Characteristic}>
					Размер: <span>L</span>
				</div>
				<div className={classes.Characteristic}>
					Цвет: <span>бежевый</span>
				</div>
				<div className={classes.productSum}>
					{order ? (
						<div className={classes.Characteristic}>
							Количество товаров: <span>{quantity}</span>
						</div>
					) : (
						<div className={classes.Counter}>
							<div className={classes.Minus} onClick={() => reduceProduct()}>
								<img src={minus} alt="" />
							</div>
							<input className={classes.Input} type="text" min="1" max="100" readOnly="readonly" value={quantity} />
							<div className={classes.Plus} onClick={() => increaseProduct()}>
								<img src={plus} alt="" />
							</div>
						</div>
					)}
					<div className={classes.TotalSum}>
						<span className={classes.OldPrice}>{price * quantity} c.</span>
						<span className={classes.NewPrice}>{price * quantity} c.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartProduct;

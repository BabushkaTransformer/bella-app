import React from "react";
import notImg from "../../assets/img/notimg.png";
import iconHeart from "../../assets/img/icons/Vector-heart.png";
import { useHistory } from "react-router";
import classes from "./ProductItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAs } from "../../store/actions/cartAction";
import { PRODUCT_PAGE_ROUTE } from "../../routes";

const ProductItem = (props) => {
	const { title, size, price, images, color, id, in_bage } = props;

	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);
	const history = useHistory();

	const addToCartHandler = (e, item) => {
		e.stopPropagation();
		dispatch(addToCartAs(item.id));
		// dispatch(addToCart(items, item));
	};

	return (
		<div className={classes.Card} onClick={() => history.push(`${PRODUCT_PAGE_ROUTE}/${id}`)}>
			{/* image */}
			<div className={classes.Image}>
				<span className={classes.Label}>
					<img src={iconHeart} alt="" />
				</span>
				<img src={images[0].image ? images[0].image : notImg} alt="" />
				{!in_bage ? (
					<div className={classes.Btn} onClick={(e) => addToCartHandler(e, props)}>
						<img src={iconHeart} alt="" />
						<span>Добавить в корзину</span>
					</div>
				) : (
					<div className={classes.BtnAdded}>
						<img src={iconHeart} alt="" />
						<span>Добавлено в корзину</span>
					</div>
				)}
			</div>
			{/* desc */}
			<div className={classes.Description}>
				<div className={classes.Prices}>
					<span className={classes.OldPrice}>{price} c</span>
					<span className={classes.NewPrice}>{price} c</span>
				</div>
				<div className={classes.Name}>{title}</div>
				<div className={classes.Size}>
					Размер:{" "}
					{size.map((el, i) => (
						<span key={i}>{el.size}</span>
					))}
				</div>
				<ul className={classes.Colors}>
					{color.map((el) => {
						return <li style={{ background: el.color }} key={el.id} className={classes.Color} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default ProductItem;

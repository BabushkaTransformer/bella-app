import React from "react";
import notImg from "../../assets/img/notimg.png";
import iconHeart from "../../assets/img/icons/Vector-heart.png";
import { useHistory } from "react-router";

const ProductItem = (props) => {
	const history = useHistory();
	return (
		<div className="goods__card product-card" onClick={() => history.push(`/productPage/${props.id}`)}>
			{/* image */}
			<div className="product-card__image">
				<span className="product-card__image--label">
					<img src={iconHeart} alt="" />
				</span>
				<img src={props.img ? props.img : notImg} alt="" />
				<div className="product-card__image--btn">
					<img src={iconHeart} alt="" />
					<span>Добавить в корзину {">"}</span>
				</div>
			</div>
			{/* desc */}
			<div className="product-card__desc">
				<div className="product-card__prices">
					<span className="product-card__prices--old">{props.oldPrice} c</span>
					<span className="product-card__prices--new">{props.newPrice} c</span>
				</div>
				<div className="product-card__name">{props.name}</div>
				<div className="product-card__size">Размер: {props.size}</div>
				<ul className="product-card__colors">
					<li className="product-card__color product-card__color--red" />
					<li className="product-card__color product-card__color--green" />
					<li className="product-card__color product-card__color--blue" />
					<li className="product-card__color product-card__color--yellow" />
					<li className="product-card__color product-card__color--gray" />
				</ul>
			</div>
		</div>
	);
};

export default ProductItem;

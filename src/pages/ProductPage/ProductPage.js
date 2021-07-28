import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductList from "../../components/product/ProductList";
import { getProduct } from "../../store/actions/products";
import classes from "./ProductPages.module.scss";

const ProductPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const singleProduct = useSelector((state) => state.products.singleProduct);

	useEffect(() => {
		dispatch(getProduct(id));
	}, [id, dispatch]);

	return (
		<div>
			<div className={classes.Product}>
				<div className={classes.Slider}>
					<img alt={singleProduct.name} src={singleProduct.img} />
				</div>
				<div className={classes.Desc}>
					<div className={classes.Info}>
						<h3>{singleProduct.name}</h3>
						<p>
							Артикул: <span>Платье PL984/dakota</span>
						</p>
						<p>
							Количество в линейке : <span>1</span>
						</p>
						<p>
							Цвет: <span>синий</span>
						</p>
					</div>
					<div className={classes.Price}>
						<span className={classes.NewPrice}>{singleProduct.newPrice}</span>
						<span className={classes.OldPrice}>{singleProduct.oldPrice}</span>
					</div>
					<div className={classes.Text}>
						<h4>О товаре:</h4>
						<p>
							За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую
							марку, а его продукция – в синоним высокого качества и актуального стиля.{" "}
						</p>
					</div>
					<div className={classes.Info}>
						<div className={classes.InfoRow}>
							<p>
								Размерный ряд: <span>42-50</span>
							</p>
							<p>
								Длина: <span>113 См</span>
							</p>
						</div>
						<div className={classes.InfoRow}>
							<p>
								Состав ткани: <span>Полиэстер </span>
							</p>
							<p>
								Фасон: <span>А-Силуэт </span>
							</p>
						</div>
					</div>
					<button className={classes.Btn}>Добавить в корзину</button>
				</div>
			</div>

			{/* Похожие товары */}
			<ProductList title={"Похожие товары"} />
		</div>
	);
};

export default ProductPage;

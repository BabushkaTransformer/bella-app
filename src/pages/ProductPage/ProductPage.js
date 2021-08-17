import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductList from "../../components/ProductList/ProductList";
import Spinner from "../../components/UI/Spinner/Spinner";
// import { addToCart } from "../../store/actions/cartAction";
import { getSingleProduct } from "../../store/actions/productsAction";
import classes from "./ProductPages.module.scss";
import noImg from "../../assets/img/product/product1.png";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const singleProduct = useSelector((state) => state.products.singleProduct);
	const items = useSelector((state) => state.cart.items);
	const loading = useSelector((state) => state.products.loading);

	console.log(singleProduct);
	const { color, images, price, description, size, title } = singleProduct;

	// slick
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();

	useEffect(() => {
		dispatch(getSingleProduct(id));
	}, [id, dispatch]);

	const settingsMain = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	const settingsThumbs = {
		slidesToShow: 4,
		arrows: true,
		infinite: items.length > 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		slidesToScroll: 1,
		focusOnSelect: true,
	};

	let preview;

	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				<div className={classes.Product}>
					<div className={classes.Slider}>
						<div className={classes.Thumbs}>
							<Slider {...settingsThumbs} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
								{images?.map((el, i) => (
									<img src={el.image} alt={el.title} />
								))}
							</Slider>
						</div>
						<div className={classes.MainSlider}>
							<Slider {...settingsMain} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
								{images?.map((el, i) => (
									<img src={el.image} alt={el.title} />
								))}
							</Slider>
						</div>
					</div>
					<div className={classes.Desc}>
						<div className={classes.Info}>
							<h3>{title}</h3>
							<p>
								Артикул: <span>Платье PL984/dakota</span>
							</p>
							<p>
								Цена: <span>{price} c.</span>
							</p>
							<p>
								Цвет:{" "}
								{color?.map((el) => (
									<span key={el.id}>{el.color + " "}</span>
								))}
							</p>
						</div>
						<div className={classes.Price}>
							<span className={classes.NewPrice}>{singleProduct.newPrice}</span>
							<span className={classes.OldPrice}>{singleProduct.oldPrice}</span>
						</div>
						<div className={classes.Text}>
							<h4>О товаре:</h4>
							<p>{description}</p>
						</div>
						<div className={classes.Info}>
							<div className={classes.InfoRow}>
								<p>
									Размерный ряд: <span>{size?.map((el) => el.size + " ")}</span>
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
						<button>
							{/* <button className={classes.Btn} onClick={() => dispatch(addToCart(items, singleProduct))}> */}
							Добавить в корзину
						</button>
					</div>
				</div>
			)}
			{/* Похожие товары */}
			<ProductList title={"Похожие товары"} />
		</div>
	);
};

export default ProductPage;

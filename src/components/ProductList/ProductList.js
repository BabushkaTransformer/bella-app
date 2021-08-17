import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/actions/productsAction";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductList.module.scss";

const ProductList = ({ title }) => {
	const dispatch = useDispatch();
	const totalCount = useSelector((state) => state.products.totalCount);
	const [visibleProducts, setVisibleProducts] = useState([]);
	const [visible, setVisible] = useState(1);
	console.log(visibleProducts);
	useEffect(() => {
		dispatch(fetchProduct(visible, 4, visibleProducts, setVisibleProducts));
	}, [dispatch, visible]);

	const showMore = () => {
		setVisible((prev) => prev + 1);
	};

	return (
		<section className={classes.Goods}>
			<div className={classes.Container}>
				<div className={classes.Title}>{title}</div>
				<div className={classes.Cards}>
					{visibleProducts.map((el, id) => {
						return <ProductItem key={id} {...el} />;
					})}
				</div>
				<div className={classes.ShowAll}>
					{totalCount > visibleProducts.length ? <button onClick={() => showMore()}>Смотреть все &gt;</button> : " "}
				</div>
			</div>
		</section>
	);
};

export default ProductList;

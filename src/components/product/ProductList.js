import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchProduct } from "../../store/actions/products";
import ProductItem from "./ProductItem";

const ProductList = ({ title, products }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	const productsArray = Object.entries(products).map(([name, value]) => {
		return {
			id: name,
			...value,
		};
	});

	return (
		<section className="goods">
			<div className="goods__container container">
				<div className="goods__title title">{title}</div>
				{/* /.goods__title */}
				<div className="goods__cards">
					{productsArray.map((el) => {
						return (
							<ProductItem
								key={el.id}
								id={el.id}
								img={el.img}
								name={el.name}
								oldPrice={el.oldPrice}
								newPrice={el.price}
								size={el.size}
							/>
						);
					})}
				</div>
				{/* /.goods__cards */}
				<div className="goods__showAll">
					<button>Смотреть все &gt;</button>
				</div>
			</div>
			{/* /.goods__container */}
		</section>
	);
};

const mapStateToProps = (state) => ({
	products: state.products.products,
});

export default connect(mapStateToProps)(ProductList);

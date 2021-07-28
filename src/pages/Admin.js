import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/products";

const Admin = () => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState({
		name: "",
		price: "",
		oldPrice: "",
		img: "",
		size: "",
	});

	const addProductHandler = () => {
		dispatch(addProduct(product));
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "400px", margin: "0 auto", padding: "100px 0" }}>
			<input
				type="text"
				value={product.name}
				onChange={(e) => setProduct({ ...product, name: e.target.value })}
				placeholder="Имя продукта"
			/>
			<input
				type="text"
				value={product.size}
				onChange={(e) => setProduct({ ...product, size: e.target.value })}
				placeholder="Размер продукта"
			/>
			<input
				type="number"
				value={product.oldPrice}
				onChange={(e) => setProduct({ ...product, oldPrice: e.target.value })}
				placeholder="Старая цена продукта"
			/>
			<input
				type="number"
				value={product.price}
				onChange={(e) => setProduct({ ...product, price: e.target.value })}
				placeholder="Цена продукта"
			/>
			<input type="text" onChange={(e) => setProduct({ ...product, img: e.target.value })} placeholder="Фото продукта" />
			<button onClick={() => addProductHandler()}>Добавить продукт</button>
		</div>
	);
};

export default Admin;

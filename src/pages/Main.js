import React from "react";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import CategoryList from "../components/category/CategoryList";
import NewsList from "../components/news/NewsList";
import ProductList from "../components/product/ProductList";
import Subscription from "../components/Subscription";

const main = () => {
	return (
		<div>
			<Banner />
			<CategoryList />
			<ProductList title={"Хит продаж"} />
			<ProductList title={"Новинки"} />
			<CategoryList title={"Коллекция"} />
			<Subscription />
			<Benefits />
			<NewsList />
		</div>
	);
};

export default main;

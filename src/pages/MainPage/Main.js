import React from "react";
import Banner from "../../components/Banner/Banner";
import Benefits from "../../components/Benefits/Benefits";
import CollectionList from "../../components/CollectionList/CollectionList";
import NewsList from "../../components/NewsList/NewsList";
import ProductList from "../../components/ProductList/ProductList";
import Subscription from "../../components/Subscription/Subscription";

const main = () => {
	return (
		<div>
			<Banner />
			<CollectionList />
			<ProductList title={"Хит продаж"} />
			<ProductList title={"Новинки"} />
			<CollectionList title={"Коллекция"} />
			<Subscription />
			<Benefits />
			<NewsList />
		</div>
	);
};

export default main;

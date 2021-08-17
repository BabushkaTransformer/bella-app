import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./CategoryPage.module.scss";

const CategoryPage = () => {
	return (
		<div className={classes.Container}>
			<div className={classes.Filter}>
				<ul>
					<li>Верхняя одежда</li>
					<li>Футболки</li>
					<li>Юбки</li>
					<li>Вечерние платья</li>
					<li>Пижамы</li>
				</ul>
			</div>
			<div className={classes.Products}>
				<div className={classes.Header}>
					<h3>Все товары</h3>
					<div className={classes.Select}>
						<select>
							<option>asdf</option>
							<option>asdf</option>
						</select>
					</div>
				</div>
				<ProductList />
			</div>
		</div>
	);
};

export default CategoryPage;

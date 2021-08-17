import React from "react";
import classes from "./CollectionItem.module.scss";
import noImg from "../../assets/img/category/caregory.png";

const CategoryItem = ({ name, image }) => {
	return (
		<div className={classes.Item}>
			<div className={classes.Image}>
				<img src={image} alt="" />
				<span>{name}</span>
			</div>
			<a href="/#" className={classes.Link}>
				Смотреть все &gt;
			</a>
		</div>
	);
};

export default CategoryItem;

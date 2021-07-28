import React from "react";

const CategoryItem = (props) => {
	return (
		<div className="rectangle__item">
			<div className="rectangle__image">
				<img src={props.img} alt="" />
				<span>{props.type}</span>
			</div>
			<a href="/#" className="rectangle__link">
				Смотреть все &gt;
			</a>
		</div>
	);
};

export default CategoryItem;

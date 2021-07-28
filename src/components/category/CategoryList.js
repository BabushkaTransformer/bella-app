import React from "react";
import { connect } from "react-redux";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ title, categories }) => {
	return (
		<section className="rectangle">
			<div className="rectangle__container container">
				<div className="rectangle__title title">{title}</div>
				<div className="rectangle__items">
					{categories.map((el) => {
						return <CategoryItem key={el.id} type={el.type} img={el.img} />;
					})}
				</div>
				{/* /.rectangle__items */}
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	categories: state.categories.categories,
});

export default connect(mapStateToProps)(CategoryList);

import React from "react";
import NewsItem from "./NewsItem";

const NewsList = () => {
	let newArr = ["1", "2", "3", "4"];

	return (
		<section className="news">
			<div className="news__container container">
				<div className="news__title title">Новости</div>
				{/* /.news__title title */}
				<div className="news__items">
					{newArr.map((el) => {
						return <NewsItem key={el} />;
					})}
				</div>
				{/* /.news__items */}
			</div>
			{/* /.news__container */}
		</section>
	);
};

export default NewsList;

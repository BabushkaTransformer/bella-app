import React from "react";
import newsImg from "../../assets/img/news/news1.png";

const NewsItem = () => {
	return (
		<div className="news__item news-card">
			{/* news-card__left */}
			<div className="news-card__left">
				<img src={newsImg} alt="" />
			</div>
			{/* news-card__right */}
			<div className="news-card__right">
				<span>06.08.2020</span>
				<h3>Гарантия обмена и возврата товара</h3>
				<p>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</p>
				<a href="/#">Подробнее &gt;</a>
			</div>
		</div>
	);
};

export default NewsItem;

import React from "react";
import { useHistory } from "react-router";
import { SINGLE_NEWS_ROUTE } from "../../routes";
import classes from "./NewsItem.module.scss";

const NewsItem = ({ image, title, description, date, id }) => {
	const history = useHistory();

	let shortText = description.substring(0, 100) + "...";

	return (
		<div className={classes.Card}>
			{/* news-card__left */}
			<div className={classes.Left}>
				<img src={image} alt={title} />
			</div>
			{/* news-card__right */}
			<div className={classes.Right}>
				<span>{date}</span>
				<h3>{title}</h3>
				<p>{shortText}</p>
				<button onClick={() => history.push(`${SINGLE_NEWS_ROUTE}/${id}`)}>Подробнее &gt;</button>
			</div>
		</div>
	);
};

export default NewsItem;

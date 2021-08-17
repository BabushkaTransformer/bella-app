import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/actions/newsAction";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./NewsList.module.scss";

const NewsList = () => {
	const dispatch = useDispatch();
	const news = useSelector((state) => state.news.news);
	const loading = useSelector((state) => state.news.loading);

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);

	return (
		<section className={classes.News}>
			<div className={classes.Container}>
				<div className={classes.Title}>Новости</div>
				{loading ? (
					<Spinner />
				) : (
					<div className={classes.Items}>
						{news.map((el, index) => {
							return <NewsItem {...el} key={el.id} />;
						})}
					</div>
				)}
			</div>
		</section>
	);
};

export default NewsList;

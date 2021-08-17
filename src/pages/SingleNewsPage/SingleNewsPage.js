import React, { useEffect } from "react";
import NewsList from "../../components/NewsList/NewsList";
import classes from "./SingleNewsPage.module.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleNews } from "../../store/actions/newsAction";
import Spinner from "../../components/UI/Spinner/Spinner";

const SingleNewsPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const singleNews = useSelector((state) => state.news.singleNews);
	const loading = useSelector((state) => state.news.loading);

	useEffect(() => {
		dispatch(getSingleNews(id));
	}, [id, dispatch]);

	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				<div className={classes.Container}>
					<div className={classes.Left}>
						<img src={singleNews.image} alt={singleNews.title} />
					</div>
					<div className={classes.Right}>
						<span>{singleNews.date}</span>
						<h1>{singleNews.title}</h1>
						<p>{singleNews.description}</p>
					</div>
				</div>
			)}
			<NewsList />
		</div>
	);
};

export default SingleNewsPage;

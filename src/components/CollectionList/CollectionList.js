import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/actions/categoriesAction";
import CategoryItem from "../CollectionItem/CollectionItem";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./CollectionList.module.scss";

const CategoryList = ({ title }) => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.categories.loading);
	const categories = useSelector((state) => state.categories.categories);

	useEffect(() => {
		dispatch(fetchCategory());
	}, [dispatch]);

	return (
		<section className={classes.Rectangle}>
			<div className={classes.Container}>
				<div className={classes.Title}>{title}</div>
				{loading ? (
					<Spinner />
				) : (
					<div className={classes.Items}>
						{categories.map((el) => {
							return <CategoryItem {...el} key={el.id} />;
						})}
					</div>
				)}
			</div>
		</section>
	);
};

export default CategoryList;

import React from "react";
import subBanner from "../../assets/img/banner/banner-sub.png";
import classes from "./Subscription.module.scss";

const Subscription = () => {
	return (
		<section className={classes.Subscription}>
			<div className={classes.Container}>
				<div className={classes.Left} style={{ backgroundImage: `url(${subBanner})` }} />
				{/* /.subscription__left */}
				<div className={classes.Right}>
					<div className={classes.Description}>
						<h3>Оформите подписку</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, id feugiat nec in sed eget. Turpis
							purus, sollicitudin quis augue consectetur lectus pharetra in ullamcorper. Sapien tortor, nunc
							venenatis aliquam accumsan, arcu, nibh adipiscing mattis. Bibendum ornare at porta sed eget
							ullamcorper porttitor faucibus tellus. Elit ullamcorper lorem in mauris.
						</p>
						<form className={classes.Form}>
							<input type="text" placeholder="Ваше Ф.И.О." />
							<input type="number" placeholder="WhatsApp номер" />
							<select name="clothes">
								<option value="dresses">Платья</option>
								<option value="outerwear">Верхняя одежда</option>
								<option value="coat">Пальто</option>
								<option value="tunics">Туники</option>
							</select>
						</form>
					</div>
				</div>
				{/* /.subscription__right */}
			</div>
		</section>
	);
};

export default Subscription;

import React from "react";
import iconHeart from "../../assets/img/icons/Vector-heart.png";
import classes from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<div className={classes.Container}>
				<div className={classes.Top}>
					<div className={classes.Column}>
						<h3>Покупателям</h3>
						<ul>
							<li>
								<a href="/#">Как сделать заказ</a>
							</li>
							<li>
								<a href="/#">Способы оплаты</a>
							</li>
							<li>
								<a href="/#">Доставка </a>
							</li>
						</ul>
					</div>
					<div className={classes.Column}>
						<h3>Покупателям</h3>
						<ul>
							<li>
								<a href="/#">Как сделать заказ</a>
							</li>
							<li>
								<a href="/#">Способы оплаты</a>
							</li>
							<li>
								<a href="/#">Доставка </a>
							</li>
						</ul>
					</div>
					<div className={classes.Column}>
						<h3>Покупателям</h3>
						<ul>
							<li>
								<a href="/#">Как сделать заказ</a>
							</li>
							<li>
								<a href="/#">Способы оплаты</a>
							</li>
							<li>
								<a href="/#">Доставка </a>
							</li>
						</ul>
					</div>
					<div className={classes.Column}>
						<h3>Покупателям</h3>
						<ul>
							<li>
								<a href="/#">Как сделать заказ</a>
							</li>
							<li>
								<a href="/#">Способы оплаты</a>
							</li>
							<li>
								<a href="/#">Доставка </a>
							</li>
						</ul>
					</div>
				</div>
				{/* /.footer__top */}
				<div className={classes.Bottom}>
					<div className={classes.CopyRight}>Developed by Sunrise Studio 2020</div>
					<ul className={classes.Socials}>
						<li>
							<a href="/#">
								<img src={iconHeart} alt="" />
							</a>
						</li>
						<li>
							<a href="/#">
								<img src={iconHeart} alt="" />
							</a>
						</li>
						<li>
							<a href="/#">
								<img src={iconHeart} alt="" />
							</a>
						</li>
						<li>
							<a href="/#">
								<img src={iconHeart} alt="" />
							</a>
						</li>
					</ul>
				</div>
				{/* /.footer__bottom */}
			</div>
			{/* /.footer__container */}
		</footer>
	);
};

export default Footer;

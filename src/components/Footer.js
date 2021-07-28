import React from "react";
import iconHeart from "../assets/img/icons/Vector-heart.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="footer__top">
					<div className="footer__column">
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
					<div className="footer__column">
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
					<div className="footer__column">
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
					<div className="footer__column">
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
				<div className="footer__bottom">
					<div className="footer__copyRight">Developed by Sunrise Studio 2020</div>
					<ul className="footer__socials">
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

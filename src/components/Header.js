import React from "react";
import logo from "../assets/img/Bellalogo.png";
import iconHeart from "../assets/img/icons/Vector-heart.png";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__burger">
					<span />
					<span />
					<span />
				</div>
				<nav className="header__nav nav">
					<a href="/#" className="nav__link">
						Товары
					</a>
					<a href="/#" className="nav__link">
						О нас
					</a>
					<a href="/#" className="nav__link">
						Новости
					</a>
					<a href="/#" className="nav__link">
						Доставка
					</a>
					<a href="/#" className="nav__link">
						Контакты
					</a>
				</nav>
				<div className="header__logo">
					<img src={logo} alt="" />
				</div>
				<ul className="header__actions actions">
					<li className="actions__item">
						<img src={iconHeart} alt="" />
						<span>Поиск</span>
					</li>
					<li className="actions__item">
						<img src={iconHeart} alt="" />
						<span>Избранное</span>
					</li>
					<li className="actions__item">
						<img src={iconHeart} alt="" />
						<span>Профиль</span>
					</li>
					<li className="actions__item">
						<img src={iconHeart} alt="" />
						<span>Корзина</span>
					</li>
				</ul>
				<div className="header__actions--mobile">
					<a href="/#">
						<img src={iconHeart} alt="" />
					</a>
					<a href="/#">
						<img src={iconHeart} alt="" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;

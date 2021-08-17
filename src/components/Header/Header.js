import {
	MAIN_ROUTE,
	CATEGORY_PAGE_ROUTE,
	NEWS_PAGE_ROUTE,
	INFO_PAGE_ROUTE,
	ABOUT_PAGE_ROUTE,
	ORDER_PAGE_ROUTE,
} from "../../routes";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Bellalogo.png";
import iconHeart from "../../assets/img/icons/Vector-heart.png";
import { signOut } from "../../store/actions/authAction";
import CartModal from "../Modals/cartModal/CartModal";
import SignIn from "../Modals/SignIn";
import SignUp from "../Modals/SignUp";
import classes from "./Header.module.scss";

const Header = () => {
	const dispatch = useDispatch();
	const [signIn, setSignIn] = useState(false);
	const [signUp, setSignUp] = useState(false);
	const [openCart, setOpenCart] = useState(false);

	return (
		<>
			<header className={classes.Header}>
				<div className={classes.Container}>
					<div className={classes.Burger}>
						<span />
						<span />
						<span />
					</div>
					<nav className={classes.Nav}>
						<Link to={CATEGORY_PAGE_ROUTE} className={classes.Link}>
							Товары
						</Link>
						<Link to={ABOUT_PAGE_ROUTE} className={classes.Link}>
							О нас
						</Link>
						<Link to={NEWS_PAGE_ROUTE} className={classes.Link}>
							Новости
						</Link>
						<Link to={INFO_PAGE_ROUTE} className={classes.Link}>
							Доставка
						</Link>
						<Link
							to={{
								pathname: INFO_PAGE_ROUTE,
								propsSearch: "1",
							}}
							className={classes.Link}
						>
							Контакты
						</Link>
					</nav>
					<Link to={MAIN_ROUTE} className={classes.Logo}>
						<img src={logo} alt="" />
					</Link>
					<ul className={classes.Actions}>
						<li className={classes.Item}>
							<img src={iconHeart} alt="" />
							<span>Поиск</span>
						</li>
						<Link to={ORDER_PAGE_ROUTE} className={classes.Item}>
							<img src={iconHeart} alt="" />
							<span>Мои заказы</span>
						</Link>
						<li className={classes.Item}>
							<img src={iconHeart} alt="" />
							<span>Профиль</span>
							{!!!JSON.parse(localStorage.getItem("token"))?.access ? (
								<ul>
									<li onClick={() => setSignIn(true)}>Войти</li>
									<li onClick={() => setSignUp(true)}>Регистрация</li>
								</ul>
							) : (
								<ul>
									<li>Профиль</li>
									<li onClick={() => dispatch(signOut())}>Выйти</li>
								</ul>
							)}
						</li>
						<li className={classes.Item} onClick={() => setOpenCart(true)}>
							<img src={iconHeart} alt="" />
							<span>Корзина</span>
						</li>
					</ul>
					<div className={classes.Actions_mobile}>
						<a href="/#">
							<img src={iconHeart} alt="" />
						</a>
						<a href="/#">
							<img src={iconHeart} alt="" />
						</a>
					</div>
				</div>
			</header>

			<SignIn active={signIn} setActive={setSignIn} />
			<SignUp active={signUp} setActive={setSignUp} />
			<CartModal active={openCart} setActive={setOpenCart} />
		</>
	);
};

export default Header;

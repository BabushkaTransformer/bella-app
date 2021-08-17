import React from "react";
import banner from "../../assets/img/banner/banner1.png";
import classes from "./Banner.module.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
	};

	return (
		<Slider {...settings}>
			<div>
				<div
					className={classes.Banner}
					style={{
						backgroundImage: `url(${banner})`,
					}}
				>
					<div className={classes.Container}>
						<div>
							<div className={classes.Title}>Скидки до 70%! Вы точно захотите это увидеть</div>
							<button className={classes.Btn}>Подробнее &gt;</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div
					className={classes.Banner}
					style={{
						backgroundImage: `url(${banner})`,
					}}
				>
					<div className={classes.Container}>
						<div>
							<div className={classes.Title}>Скидки до 70%! Вы точно захотите это увидеть</div>
							<button className={classes.Btn}>Подробнее &gt;</button>
						</div>
					</div>
				</div>
			</div>
		</Slider>
	);
};

export default Banner;

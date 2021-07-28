import React from "react";
import banner from "../assets/img/banner/banner1.png";

const Banner = () => {
	return (
		<section
			className="intro"
			style={{
				backgroundImage: `url(${banner})`,
			}}
		>
			<div className="intro__container container">
				<div className="intro__desc">
					<div className="intro__title">Скидки до 70%! Вы точно захотите это увидеть</div>
					<button className="intro__btn">Подробнее &gt;</button>
				</div>
			</div>
		</section>
	);
};

export default Banner;

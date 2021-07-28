import React from "react";
import truck from "../assets/img/icons/truck.png";

const Benefits = () => {
	return (
		<section className="benefits">
			<div className="benefits__container container">
				<div className="benefits__title title">Наши преимущества</div>
				{/* /.benefits__title */}
				<div className="benefits__items">
					{/* item */}
					<div className="benefits__item">
						<img src={truck} alt="" />
						<h3>Возможность оплаты при получении</h3>
						<p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
					</div>
					{/* item */}
					<div className="benefits__item">
						<img src={truck} alt="" />
						<h3>Возможность оплаты при получении</h3>
						<p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
					</div>
					{/* item */}
					<div className="benefits__item">
						<img src={truck} alt="" />
						<h3>Возможность оплаты при получении</h3>
						<p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
					</div>
					{/* item */}
					<div className="benefits__item">
						<img src={truck} alt="" />
						<h3>Возможность оплаты при получении</h3>
						<p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
					</div>
				</div>
				{/* /.benefits__items */}
			</div>
			{/* /.benefits__container */}
		</section>
	);
};

export default Benefits;

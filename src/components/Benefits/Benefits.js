import React from "react";
import truck from "../../assets/img/icons/truck.png";
import classes from "./Benefits.module.scss";

const Benefits = () => {
	return (
		<section className={classes.Benefits}>
			<div className={classes.Container}>
				<div className={classes.Title}>Наши преимущества</div>
				{/* /.benefits__title */}
				<div className={classes.Items}>
					{/* item */}
					<div className={classes.Item}>
						<img src={truck} alt="" />
						<h3>Возможность оплаты при получении</h3>
						<p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
					</div>
					{/* item */}
					<div className={classes.Item}>
						<img src={truck} alt="" />
						<h3>Возможность оплаты при получении</h3>
						<p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
					</div>
					{/* item */}
					<div className={classes.Item}>
						<img src={truck} alt="" />
						<h3>Возможность оплаты при получении</h3>
						<p>Мы предлагаем возможность оплаты наложенным платежом (при получении)</p>
					</div>
					{/* item */}
					<div className={classes.Item}>
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

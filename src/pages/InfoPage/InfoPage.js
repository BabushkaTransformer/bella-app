import React, { useState } from "react";
import classes from "./InfoPage.module.scss";

const InfoPage = (props) => {
	let current;
	props.location.propsSearch ? (current = +props.location.propsSearch) : (current = 0);
	const [active, setActive] = useState(current);
	const items = [
		{
			title: "Доставка",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus",
		},
		{
			title: "Контакты",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus",
		},
		{
			title: "Вопросы и ответы",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus",
		},
	];

	return (
		<div>
			<div className={classes.Container}>
				<div className={classes.Left}>
					{items.map((n, i) => (
						<span
							key={i}
							className={i === active ? classes.active : ""}
							onClick={(e) => setActive(+e.target.dataset.index)}
							data-index={i}
						>
							{n.title}
						</span>
					))}
				</div>
				<div className={classes.Right}>
					<h2>{items[active].title}</h2>
					<p>{items[active].content}</p>
				</div>
			</div>
		</div>
	);
};
// className={`tablinks ${i === active ? "active" : ""}`}
export default InfoPage;

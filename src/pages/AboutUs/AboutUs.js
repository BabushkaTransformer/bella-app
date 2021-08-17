import React from "react";
import classes from "./AboutUs.module.scss";
import logo from "../../assets/img/Bellalogo.png";
import bigimg from "../../assets/img/aboutUs/bigimg.png";
import midimg from "../../assets/img/aboutUs/midimg.png";
import smimg from "../../assets/img/aboutUs/smimg.png";

const AboutUs = () => {
	return (
		<div className={classes.About}>
			<div className={classes.Container}>
				<img className={classes.BigImg} src={bigimg} alt="about" />
				<div className={classes.BigLogo}>
					<img src={logo} alt="about" />
				</div>
			</div>
			<div className={classes.Container}>
				<img className={classes.SmImg} src={smimg} alt="about" />
				<div className={classes.RightText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
					magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
					est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
					in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum
					lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra
					vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas
					fringilla phasellus faucibus
				</div>
			</div>
			<div className={classes.Container}>
				<div className={classes.LeftText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
					magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla
					est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
					in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum
					lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra
					vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas
					fringilla phasellus faucibus
				</div>
				<img className={classes.MdText} src={midimg} alt="about" />
			</div>
		</div>
	);
};

export default AboutUs;

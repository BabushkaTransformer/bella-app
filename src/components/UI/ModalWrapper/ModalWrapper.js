import React from "react";
import classes from "./ModalWrapper.module.scss";
import logo from "../../../assets/img/Bellalogo.png";

const ModalWrapper = ({ active, setActive, children }) => {
	return (
		<div className={active ? classes.Modal + " " + classes.Active : classes.Modal} onClick={() => setActive(false)}>
			<div className={classes.ModalContent} onClick={(e) => e.stopPropagation()}>
				<div className={classes.Logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={classes.Form}>{children}</div>
			</div>
		</div>
	);
};

export default ModalWrapper;

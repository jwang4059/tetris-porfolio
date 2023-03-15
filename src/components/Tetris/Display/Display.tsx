import React from "react";
import styles from "./Display.module.scss";

interface DisplayProps {
	text: string;
	value?: string | number;
	gameOver: boolean;
}

const Display = ({ text, value, gameOver }: DisplayProps) => {
	const status = gameOver ? "gameover" : "ongoing";
	return (
		<div className={styles["display"]}>
			<div className={styles["display__title"]}>{text}</div>
			<div className={styles["display__value"]}>{value}</div>
		</div>
	);
};

export default Display;

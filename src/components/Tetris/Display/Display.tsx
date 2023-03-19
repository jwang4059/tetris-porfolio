import clsx from "clsx";
import React from "react";
import styles from "./Display.module.scss";

interface DisplayProps {
	text: string;
	value?: string | number;
	gameOver?: boolean;
}

const Display = ({ text, value, gameOver }: DisplayProps) => {
	return (
		<div className={styles["display"]}>
			<div>{text}</div>
			<div className={clsx(gameOver && styles["over"])}>{value}</div>
		</div>
	);
};

export default Display;

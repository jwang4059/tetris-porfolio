import React from "react";
import clsx from "clsx";
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

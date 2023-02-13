import React from "react";
import styles from "./Display.module.scss";

interface DisplayProps {
	text: string;
	gameOver: boolean;
}

const Display = ({ text, gameOver }: DisplayProps) => {
	const status = gameOver ? "gameover" : "ongoing";
	return <div className={styles[status]}>{text}</div>;
};

export default Display;

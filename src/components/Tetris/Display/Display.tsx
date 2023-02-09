import React from "react";
import styles from "./Display.module.scss";

interface DisplayProps {
	gameOver: boolean;
	text: string;
}

const Display = ({ gameOver, text }: DisplayProps) => {
	const status = gameOver ? "gameover" : "ongoing";
	return <div className={styles[status]}>{text}</div>;
};

export default Display;

import React from "react";
import styles from "./StartButton.module.scss";

interface StartButtonProps {
	gameState: string;
	onClick: () => void;
}

const textMap: { [key: string]: string } = {
	initial: "Start Game",
	playing: "Pause Game",
	paused: "Resume Game",
	over: "Restart Game",
};

const StartButton = ({ gameState, onClick }: StartButtonProps) => {
	return (
		<button className={styles[gameState]} onClick={onClick}>
			{textMap[gameState]}
		</button>
	);
};

export default StartButton;

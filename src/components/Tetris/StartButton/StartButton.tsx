import React from "react";
import styles from "./StartButton.module.scss";

interface StartButtonProps {
	onClick: () => void;
}

const StartButton = ({ onClick }: StartButtonProps) => {
	return (
		<div className={styles.startbutton} onClick={onClick}>
			Start Game
		</div>
	);
};

export default StartButton;

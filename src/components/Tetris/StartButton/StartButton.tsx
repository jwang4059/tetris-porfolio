import React from "react";
import styles from "./StartButton.module.scss";

interface StartButtonProps {
	callback: () => void;
}

const StartButton = ({ callback }: StartButtonProps) => {
	return (
		<div className={styles.startbutton} onClick={callback}>
			Start Game
		</div>
	);
};

export default StartButton;

import React from "react";

interface StartButtonProps {
	callback: () => void;
}

const StartButton = ({ callback }: StartButtonProps) => {
	return <div>Start Game</div>;
};

export default StartButton;

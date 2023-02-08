import React from "react";

interface DisplayProps {
	gameOver: boolean;
	text: string;
}

const Display = ({ gameOver, text }: DisplayProps) => {
	return <div>{text}</div>;
};

export default Display;

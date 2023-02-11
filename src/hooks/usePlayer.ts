import { useState } from "react";
import { generateRandTetramino } from "@/utils/tetrominos";

export type PlayerType = {
	pos: { x: number; y: number };
	tetromino: string[][];
	collided: boolean;
};

export const usePlayer = () => {
	const [player, setPlayer] = useState<PlayerType>({
		pos: { x: 0, y: 0 },
		tetromino: generateRandTetramino().shape,
		collided: false,
	});

	return [player] as const;
};

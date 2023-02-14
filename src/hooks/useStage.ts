import { useState, useEffect } from "react";
import { createStage } from "@/utils/gameHelpers";
import { StageType, PlayerType } from "@/utils/types";

export const useStage = (player: PlayerType, resetPlayer: () => void) => {
	const [stage, setStage] = useState(createStage());
	const [rowsCleared, setRowsCleared] = useState(0);

	// Use for loop to improve performance
	useEffect(() => {
		setRowsCleared(0);

		const sweepRows = (newStage: StageType) =>
			newStage.reduce((ack, row) => {
				if (row.findIndex((cell) => cell.value === "0") === -1) {
					setRowsCleared((prev) => prev + 1);
					ack.unshift(
						new Array(newStage[0].length).fill({ value: "0", status: "clear" })
					);
					return ack;
				}
				ack.push(row);
				return ack;
			}, [] as StageType);

		const updateStage = (prevStage: StageType) => {
			//First flush the stage
			const newStage = prevStage.map((row) =>
				row.map((cell) =>
					cell.status === "clear" ? { value: "0", status: "clear" } : cell
				)
			);

			// Merge current tetromino into board
			for (let y = 0; y < player.tetromino.length; y++) {
				for (let x = 0; x < player.tetromino[y].length; x++) {
					if (player.tetromino[y][x] !== "0") {
						newStage[player.pos.y + y][player.pos.x + x] = {
							value: player.tetromino[y][x],
							status: `${player.collided ? "merged" : "clear"}`,
						};
					}
				}
			}

			// Then check if we collided
			if (player.collided) {
				resetPlayer();
				return sweepRows(newStage);
			}

			return newStage;
		};

		setStage(updateStage(stage));
	}, [player, resetPlayer, stage]);

	return [stage, setStage, rowsCleared] as const;
};

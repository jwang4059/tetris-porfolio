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

			// Then draw tetromino
			player.tetromino.forEach((row, y) => {
				row.forEach((value, x) => {
					if (value !== "0") {
						newStage[y + player.pos.y][x + player.pos.x] = {
							value,
							status: `${player.collided ? "merged" : "clear"}`,
						};
					}
				});
			});

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

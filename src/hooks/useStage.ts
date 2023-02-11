import { useState, useEffect } from "react";
import { PlayerType } from "./usePlayer";
import { CellType, createStage } from "@/utils/gameHelpers";

export const useStage = (player: PlayerType, resetPlayer: () => void) => {
	const [stage, setStage] = useState(createStage());

	// Use for loop to improve performance
	useEffect(() => {
		const updateStage = (prevStage: CellType[][]) => {
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

			return newStage;
		};

		setStage(updateStage(stage));
	}, [player, stage]);

	return [stage, setStage] as const;
};

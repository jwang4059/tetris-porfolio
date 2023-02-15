import { useState, useEffect } from "react";
import { createStage } from "@/utils/gameHelpers";
import { StageType, PlayerType } from "@/utils/types";

export const useStage = (player: PlayerType, resetPlayer: () => void) => {
	const [stage, setStage] = useState(createStage());
	const [rowsCleared, setRowsCleared] = useState(0);

	const sweepRows = (stage: StageType) => {
		let rowCount = 1;
		outer: for (let y = stage.length - 1; y > 0; --y) {
			for (let x = 0; x < stage[y].length; ++x) {
				if (stage[y][x] === "0") {
					continue outer;
				}
			}

			const row = stage.splice(y, 1)[0].fill("0");
			stage.unshift(row);
			++y;

			// player.score += rowCount * 10;
			rowCount *= 2;
		}
	};

	return [stage, setStage, rowsCleared] as const;
};

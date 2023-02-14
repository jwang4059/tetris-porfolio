import { STAGE_HEIGHT, STAGE_WIDTH } from "./constants";
import { CoordinateType, PlayerType, StageType } from "./types";

export const createStage: () => StageType = () => {
	return new Array(STAGE_HEIGHT).fill(
		new Array(STAGE_WIDTH).fill({ value: "0", status: "clear" })
	);
};

export const checkCollision = (
	player: PlayerType,
	stage: StageType,
	move: CoordinateType
) => {
	for (let row = 0; row < player.tetromino.length; row += 1) {
		for (let col = 0; col < player.tetromino[row].length; col += 1) {
			// 1. Check that we're on an actual Tetromino cell
			if (player.tetromino[row][col] !== "0") {
				if (
					// 2. Check that our move is inside the game area height (y)
					// We shouldn't go through the bottom of the play area
					!stage[row + player.pos.y + move.y] ||
					// 3. Check that our move is inside the game areas width (x)
					!stage[row + player.pos.y + move.y][col + player.pos.x + move.x] ||
					// 4. Check that the cell we're moving to isn't set to clear
					stage[row + player.pos.y + move.y][col + player.pos.x + move.x]
						.status !== "clear"
				) {
					return true;
				}
			}
		}
	}
};

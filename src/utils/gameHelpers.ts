import { PlayerType } from "@/hooks/usePlayer";

export const STAGE_HEIGHT = 20;
export const STAGE_WIDTH = 12;

export type CellType = {
	value: string;
	status: string;
};

export const createStage: () => CellType[][] = () => {
	return new Array(STAGE_HEIGHT).fill(
		new Array(STAGE_WIDTH).fill({ value: "0", status: "clear" })
	);
};

export const checkCollision = (
	player: PlayerType,
	stage: CellType[][],
	{ x: moveX, y: moveY }: { x: number; y: number }
) => {
	for (let y = 0; y < player.tetromino.length; y += 1) {
		for (let x = 0; x < player.tetromino[y].length; x += 1) {
			// 1. Check that we're on an actual Tetromino cell
			if (player.tetromino[y][x] !== "0") {
				if (
					// 2. Check that our move is inside the game area height (y)
					// We shouldn't go through the bottom of the play area
					!stage[y + player.pos.y + moveY] ||
					// 3. Check that our move is inside the game areas width (x)
					!stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
					// 4. Check that the cell we're moving to isn't set to clear
					stage[y + player.pos.y + moveY][x + player.pos.x + moveX].status !==
						"clear"
				) {
					return true;
				}
			}
		}
	}
};
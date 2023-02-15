import { STAGE_HEIGHT, STAGE_WIDTH } from "./constants";
import { PlayerType, StageType } from "./types";

export const createStage: () => StageType = () => {
	return new Array(STAGE_HEIGHT).fill(new Array(STAGE_WIDTH).fill("0"));
};

export const mergeStage = (stage: StageType, player: PlayerType) => {
	const result = stage.map((row) => row.slice());

	// Merge current tetromino into board
	for (let y = 0; y < player.tetromino.length; y++) {
		for (let x = 0; x < player.tetromino[y].length; x++) {
			if (player.tetromino[y][x] !== "0") {
				result[y + player.pos.y][x + player.pos.x] = player.tetromino[y][x];
			}
		}
	}

	return result;
};

export const checkCollision = (player: PlayerType, stage: StageType) => {
	const t = player.tetromino;
	const o = player.pos;
	for (let y = 0; y < t.length; y++) {
		for (let x = 0; x < t[y].length; x++) {
			if (
				t[y][x] !== "0" &&
				stage[y + o.y] &&
				stage[y + o.y][x + o.x] &&
				stage[y + o.y][x + o.x] !== "0"
			) {
				return true;
			}
		}
	}
	return false;
};

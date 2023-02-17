import { STAGE_HEIGHT, STAGE_WIDTH } from "./constants";
import { CoordinateType, PlayerType, StageType } from "./types";

export const createStage: () => StageType = () => {
	return new Array(STAGE_HEIGHT).fill(new Array(STAGE_WIDTH).fill("0"));
};

export const mergeStage = (stage: StageType, player: PlayerType) => {
	if (!player.tetromino) return stage;
	const newStage = stage.map((row) => row.slice());

	// Merge current tetromino into board
	for (let y = 0; y < player.tetromino.length; y++) {
		for (let x = 0; x < player.tetromino[y].length; x++) {
			if (player.tetromino[y][x] !== "0") {
				newStage[y + player.pos.y][x + player.pos.x] = player.tetromino[y][x];
			}
		}
	}

	return newStage;
};

export const sweepStage = (stage: StageType) => {
	const newStage = stage.map((row) => row.slice());

	let rowCount = 0;
	outer: for (let y = newStage.length - 1; y > 0; y--) {
		for (let x = 0; x < newStage[y].length; x++) {
			if (newStage[y][x] === "0") {
				continue outer;
			}
		}

		const row = newStage.splice(y, 1)[0].fill("0");
		newStage.unshift(row);
		y++;
		rowCount++;
	}

	return { newStage, rowCount };
};

export const mergeAndSweepStage = (stage: StageType, player: PlayerType) => {
	const mergedStage = mergeStage(stage, player);
	return sweepStage(mergedStage);
};

export const checkCollision = (
	stage: StageType,
	player: PlayerType,
	move: CoordinateType
) => {
	if (!player.tetromino) return false;
	const { pos, tetromino } = player;

	for (let y = 0; y < tetromino.length; y++) {
		for (let x = 0; x < tetromino[y].length; x++) {
			if (
				tetromino[y][x] !== "0" &&
				(!stage[y + pos.y + move.y] ||
					!stage[y + pos.y + move.y][x + pos.x + move.x] ||
					stage[y + pos.y + move.y][x + pos.x + move.x] !== "0")
			) {
				return true;
			}
		}
	}
	return false;
};

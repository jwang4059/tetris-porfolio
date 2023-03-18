import { CoordinateType, TetrominoType, PlayerType, StageType } from "./types";

const str_pad_left = (str: number, pad: string, length: number) => {
	return (new Array(length + 1).join(pad) + str).slice(-length);
};

export const getTimeStr = (time: number) => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
};

export const getDropTime = (currLevel: number) => {
	return 1000 / currLevel + 200;
};

export const createMatrix = (height: number, width: number) => {
	return new Array(height).fill(new Array(width).fill("0")) as string[][];
};

export const mergeMatrix = (
	matrixA: StageType | string[][] | undefined,
	matrixB: TetrominoType | string[][] | undefined,
	pos?: CoordinateType
) => {
	if (!matrixA || !matrixB) return matrixA;
	pos ??= { x: 0, y: 0 };

	const result = matrixA.map((row) => row.slice());

	for (let y = 0; y < matrixB.length; y++) {
		for (let x = 0; x < matrixB[y].length; x++) {
			if (
				matrixB[y][x] !== "0" &&
				result[y + pos.y] &&
				result[y + pos.y][x + pos.x]
			) {
				result[y + pos.y][x + pos.x] = matrixB[y][x];
			}
		}
	}

	return result as string[][];
};

export const sweepStage = (stage: StageType | undefined) => {
	if (!stage) return { stage, rowCount: 0 };

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

export const mergeAndSweepStage = (
	stage: StageType | undefined,
	player: PlayerType
) => {
	const mergedStage = mergeMatrix(stage, player.tetromino, player.pos);
	return sweepStage(mergedStage);
};

export const checkCollision = (
	stage: StageType | undefined,
	player: PlayerType,
	move: CoordinateType
) => {
	if (!stage || !player.tetromino) return false;
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

export const getHardDropPos = (
	stage: StageType | undefined,
	player: PlayerType
) => {
	let y = 0;

	while (!checkCollision(stage, player, { x: 0, y })) y++;
	y--;

	return { x: 0, y };
};

import _ from "lodash";
import { TetrominosType, TetrominoType } from "./types";

export const TETROMINOS: TetrominosType = {
	"0": [["0"]],
	I: [
		["0", "0", "0", "0"],
		["I", "I", "I", "I"],
		["0", "0", "0", "0"],
		["0", "0", "0", "0"],
	],
	J: [
		["J", "0", "0"],
		["J", "J", "J"],
		["0", "0", "0"],
	],
	L: [
		["0", "0", "L"],
		["L", "L", "L"],
		["0", "0", "0"],
	],

	O: [
		["O", "O"],
		["O", "O"],
	],

	S: [
		["0", "S", "S"],
		["S", "S", "0"],
		["0", "0", "0"],
	],

	T: [
		["0", "T", "0"],
		["T", "T", "T"],
		["0", "0", "0"],
	],
	Z: [
		["Z", "Z", "0"],
		["0", "Z", "Z"],
		["0", "0", "0"],
	],
};

export const getTetrominoPreview = (matrix: TetrominoType | undefined) => {
	if (!matrix) return matrix;

	return matrix.map((row) => row.map((val) => val.toLowerCase()));
};

export const simplifyTetromino = (matrix: TetrominoType) => {
	if (!matrix) return matrix;

	return matrix.filter((row) => !row.every((val) => val === "0"));
};

export const rotateTetromino = (matrix: TetrominoType, dir: number) => {
	// Transpose Matrix
	const transposedMatrix = matrix[0].map((_, colIndex) =>
		matrix.map((row) => row[colIndex])
	);

	// Reflect Matrix
	const reflectedMatrix =
		dir > 0
			? transposedMatrix.map((row) => row.reverse())
			: transposedMatrix.reverse();

	return reflectedMatrix;
};

export const generateRandTetrominoType = () => {
	const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"];
	const randTetromino =
		tetrominos[Math.floor(Math.random() * tetrominos.length)];
	return randTetromino;
};

export const getQueue = (queue: string[]) => {
	const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"];

	while (queue.length < 7) {
		queue = queue.concat(_.shuffle(tetrominos));
	}

	return queue;
};

export const getNextTetrominoType = (queue: string[]) => {
	const next = queue.shift();

	return { queue, tetrominoType: next || generateRandTetrominoType() };
};

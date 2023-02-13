import { TetraminosType, TetrominoType } from "./types";

export const TETROMINOS: TetraminosType = {
	"0": [["0"]],
	I: [
		["0", "I", "0", "0"],
		["0", "I", "0", "0"],
		["0", "I", "0", "0"],
		["0", "I", "0", "0"],
	],
	J: [
		["0", "J", "0"],
		["0", "J", "0"],
		["J", "J", "0"],
	],
	L: [
		["0", "L", "0"],
		["0", "L", "0"],
		["0", "L", "L"],
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
		["0", "0", "0"],
		["T", "T", "T"],
		["0", "T", "0"],
	],
	Z: [
		["Z", "Z", "0"],
		["0", "Z", "Z"],
		["0", "0", "0"],
	],
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

export const generateRandTetramino = () => {
	const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"];
	const randTetromino =
		tetrominos[Math.floor(Math.random() * tetrominos.length)];
	return TETROMINOS[randTetromino];
};

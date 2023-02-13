export type TetrominoType = {
	shape: string[][];
	color: string;
};

export type TetraminosType = {
	[key: string]: TetrominoType;
};

export const TETROMINOS: TetraminosType = {
	"0": {
		shape: [["0"]],
		color: "",
	},
	I: {
		shape: [
			["0", "I", "0", "0"],
			["0", "I", "0", "0"],
			["0", "I", "0", "0"],
			["0", "I", "0", "0"],
		],
		color: "",
	},
	J: {
		shape: [
			["0", "J", "0"],
			["0", "J", "0"],
			["J", "J", "0"],
		],
		color: "",
	},
	L: {
		shape: [
			["0", "L", "0"],
			["0", "L", "0"],
			["0", "L", "L"],
		],
		color: "",
	},
	O: {
		shape: [
			["O", "O"],
			["O", "O"],
		],
		color: "",
	},
	S: {
		shape: [
			["0", "S", "S"],
			["S", "S", "0"],
			["0", "0", "0"],
		],
		color: "",
	},
	T: {
		shape: [
			["0", "0", "0"],
			["T", "T", "T"],
			["0", "T", "0"],
		],
		color: "",
	},
	Z: {
		shape: [
			["Z", "Z", "0"],
			["0", "Z", "Z"],
			["0", "0", "0"],
		],
		color: "",
	},
};

export const generateRandTetramino = () => {
	const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"];
	const randTetromino =
		tetrominos[Math.floor(Math.random() * tetrominos.length)];
	return TETROMINOS[randTetromino];
};

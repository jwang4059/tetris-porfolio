export type TetrominoType = string[][];

export type TetraminosType = {
	[key: string]: TetrominoType;
};

export type StageType = string[][];

export type CoordinateType = {
	x: number;
	y: number;
};

export type PlayerType = {
	pos: CoordinateType;
	tetromino: TetrominoType;
};

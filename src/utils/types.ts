export type TetrominoType = string[][];

export type TetrominosType = {
	[key: string]: TetrominoType;
};

export type StageType = string[][];

export type CoordinateType = {
	x: number;
	y: number;
};

export type PlayerType = {
	pos: CoordinateType;
	tetromino?: TetrominoType;
	hold?: TetrominoType;
	queue: string[];
};

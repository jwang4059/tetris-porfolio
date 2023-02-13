export type TetrominoType = string[][];

export type TetraminosType = {
	[key: string]: TetrominoType;
};

export type CellType = {
	value: string;
	status: string;
};

export type StageType = CellType[][];

export type CoordinateType = {
	x: number;
	y: number;
};

export type PlayerType = {
	pos: CoordinateType;
	tetromino: TetrominoType;
	collided: boolean;
};

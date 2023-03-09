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
	tetrominoType?: string;
	tetromino?: TetrominoType;
	hold?: string;
	hasSwitch: boolean;
	queue: string[];
};

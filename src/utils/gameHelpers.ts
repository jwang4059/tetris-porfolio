export const STAGE_HEIGHT = 12;
export const STAGE_WIDTH = 20;

export type CellType = {
	value: number;
	status: string;
};

export const createStage: () => CellType[][] = () => {
	return new Array(STAGE_HEIGHT).fill(
		new Array(STAGE_WIDTH).fill({ value: 0, status: "clear" })
	);
};

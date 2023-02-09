export const STAGE_HEIGHT = 20;
export const STAGE_WIDTH = 12;

export type CellType = {
	value: string;
	status: string;
};

export const createStage: () => CellType[][] = () => {
	return new Array(STAGE_HEIGHT).fill(
		new Array(STAGE_WIDTH).fill({ value: "0", status: "clear" })
	);
};

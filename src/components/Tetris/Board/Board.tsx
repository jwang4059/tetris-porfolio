import React from "react";
import Cell from "../Cell/Cell";
import { getBoardStyle } from "@/utils/gameHelpers";

interface BoardProps {
	matrix?: string[][];
	locked?: boolean;
	row: number;
	col: number;
	size: string;
	grid?: boolean;
}

const Board = ({ matrix, locked, row, col, size, grid }: BoardProps) => {
	return (
		<div style={getBoardStyle(row, col, size, grid)}>
			{matrix &&
				matrix.map((row) =>
					row.map((cell, x) => <Cell key={x} type={cell} locked={locked} />)
				)}
		</div>
	);
};

export default Board;

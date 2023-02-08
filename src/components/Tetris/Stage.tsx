import React from "react";
import Cell from "./Cell";
import { CellType } from "@/utils/gameHelpers";

interface StageProps {
	stage: CellType[][];
}

const Stage = ({ stage }: StageProps) => {
	return (
		<div>
			{stage.map((row) =>
				row.map((cell, x) => <Cell key={x} type={cell.value} />)
			)}
		</div>
	);
};

export default Stage;

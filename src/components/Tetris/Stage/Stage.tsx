import React from "react";
import Board from "../Board/Board";
import { STAGE_HEIGHT, STAGE_WIDTH } from "@/utils/constants";
import { StageType } from "@/utils/types";

interface StageProps {
	stage?: StageType;
}

const Stage = ({ stage }: StageProps) => {
	return (
		<Board
			matrix={stage}
			row={STAGE_HEIGHT}
			col={STAGE_WIDTH}
			size={"20px"}
			grid
		/>
	);
};

export default Stage;

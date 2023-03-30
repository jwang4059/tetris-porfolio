import React from "react";
import Board from "../Board/Board";
import { STAGE_HEIGHT, STAGE_WIDTH } from "@/utils/constants";
import { StageType } from "@/utils/types";
import styles from "./Stage.module.scss";

interface StageProps {
	stage?: StageType;
}

const Stage = ({ stage }: StageProps) => {
	return (
		<div className={styles.stage}>
			<Board
				matrix={stage}
				row={STAGE_HEIGHT}
				col={STAGE_WIDTH}
				size={"20px"}
				grid
			/>
		</div>
	);
};

export default Stage;

import React from "react";
import Board from "../Board/Board";
import { createMatrix, mergeMatrix } from "@/utils/gameHelpers";
import { TETROMINOS_TRIMMED } from "@/utils/tetrominos";
import styles from "./Hold.module.scss";

interface HoldProps {
	tetrominoType?: string;
	hasSwitch: boolean;
}

const Hold = ({ tetrominoType, hasSwitch }: HoldProps) => {
	const hold = tetrominoType
		? TETROMINOS_TRIMMED[tetrominoType]
		: createMatrix(2, 4);

	return (
		<div className={styles["hold"]}>
			<div className={styles["hold__title"]}>Hold</div>
			<div className={styles["hold__board__wrapper"]}>
				<Board matrix={hold} locked={!hasSwitch} trimmed />
			</div>
		</div>
	);
};

export default Hold;

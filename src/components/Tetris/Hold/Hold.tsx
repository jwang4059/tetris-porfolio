import React from "react";
import Board from "../Board/Board";
import { createMatrix, mergeMatrix } from "@/utils/gameHelpers";
import { TETROMINOS } from "@/utils/tetrominos";
import styles from "./Hold.module.scss";

interface HoldProps {
	tetrominoType?: string;
	hasSwitch: boolean;
}

const Hold = ({ tetrominoType, hasSwitch }: HoldProps) => {
	const board = createMatrix(4, 4);
	const hold = tetrominoType
		? mergeMatrix(board, TETROMINOS[tetrominoType])
		: board;

	return (
		<div className={styles.hold}>
			<Board matrix={hold} locked={!hasSwitch} />
		</div>
	);
};

export default Hold;

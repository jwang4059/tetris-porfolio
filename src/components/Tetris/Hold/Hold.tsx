import React from "react";
import Cell from "../Cell/Cell";
import { TetrominoType } from "@/utils/types";
import { createMatrix, mergeMatrix } from "@/utils/gameHelpers";
import styles from "./Hold.module.scss";
import { TETROMINOS } from "@/utils/tetrominos";

interface HoldProps {
	tetrominoType?: string;
}

const Hold = ({ tetrominoType }: HoldProps) => {
	const board = createMatrix(4, 4);
	const hold = tetrominoType
		? mergeMatrix(board, TETROMINOS[tetrominoType])
		: board;

	return (
		<div className={styles.hold}>
			{hold &&
				hold.map((row) => row.map((cell, x) => <Cell key={x} type={cell} />))}
		</div>
	);
};

export default Hold;

import React from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.scss";

interface BoardProps {
	matrix?: string[][];
	locked?: boolean;
	trimmed?: boolean;
}

const Board = ({ matrix, locked, trimmed }: BoardProps) => {
	return (
		<div className={trimmed ? styles.trimmed : styles.default}>
			{matrix &&
				matrix.map((row) =>
					row.map((cell, x) => <Cell key={x} type={cell} locked={locked} />)
				)}
		</div>
	);
};

export default Board;

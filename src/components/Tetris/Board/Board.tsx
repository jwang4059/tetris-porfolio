import React from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.scss";

interface BoardProps {
	matrix?: string[][];
	locked?: boolean;
	large?: boolean;
}

const Board = ({ matrix, locked, large }: BoardProps) => {
	return (
		<div className={large ? styles.stage : styles.default}>
			{matrix &&
				matrix.map((row) =>
					row.map((cell, x) => <Cell key={x} type={cell} locked={locked} />)
				)}
		</div>
	);
};

export default Board;

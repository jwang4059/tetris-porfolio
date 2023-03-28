import React from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.scss";

interface BoardProps {
	matrix?: string[][];
	locked?: boolean;
	shape: string;
}

const Board = ({ matrix, locked, shape }: BoardProps) => {
	return (
		<div className={styles[shape]}>
			{matrix &&
				matrix.map((row) =>
					row.map((cell, x) => <Cell key={x} type={cell} locked={locked} />)
				)}
		</div>
	);
};

export default Board;

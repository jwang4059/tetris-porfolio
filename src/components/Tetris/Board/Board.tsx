import React from "react";
import Cell from "../Cell/Cell";
import styles from "./Next.module.scss";

interface BoardProps {
	matrix: string[][];
	locked?: boolean;
}

const Board = ({ matrix, locked }: BoardProps) => {
	return (
		<div className={styles.board}>
			{matrix &&
				matrix.map((row) =>
					row.map((cell, x) => <Cell key={x} type={cell} locked={locked} />)
				)}
		</div>
	);
};

export default Board;

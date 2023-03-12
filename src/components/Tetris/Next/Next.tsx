import React from "react";
import Board from "../Board/Board";
import { createMatrix, mergeMatrix } from "@/utils/gameHelpers";
import { TETROMINOS } from "@/utils/tetrominos";
import styles from "./Next.module.scss";

interface NextProps {
	queue: string[];
}

const Next = ({ queue }: NextProps) => {
	const boardList = new Array(5).fill(createMatrix(4, 4)) as string[][][];

	for (let i = 0; i < boardList.length; i++) {
		let temp;
		if (queue[i]) temp = mergeMatrix(boardList[i], TETROMINOS[queue[i]]);
		if (temp) boardList[i] = temp;
	}

	return (
		<div className={styles.next}>
			{boardList.map((board, i) => (
				<Board key={i} matrix={board} />
			))}
		</div>
	);
};

export default Next;

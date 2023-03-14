import React from "react";
import Board from "../Board/Board";
import { createMatrix, mergeMatrix } from "@/utils/gameHelpers";
import { TETROMINOS_TRIMMED } from "@/utils/tetrominos";
import styles from "./Next.module.scss";

interface NextProps {
	queue: string[];
}

const Next = ({ queue }: NextProps) => {
	const boardList = queue.length
		? queue
				.slice(0, 5)
				.map((tetrominoType) => TETROMINOS_TRIMMED[tetrominoType])
		: (new Array(5).fill(createMatrix(2, 4)) as string[][][]);

	return (
		<div className={styles["next"]}>
			<div className={styles["next__title"]}>Next</div>
			<div className={styles["next__boards__wrapper"]}>
				{boardList.map((board, i) => (
					<div key={i} className={styles["next__board__wrapper"]}>
						<Board matrix={board} trimmed />
					</div>
				))}
			</div>
		</div>
	);
};

export default Next;

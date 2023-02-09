import React from "react";
import Cell from "../Cell/Cell";
import { CellType } from "@/utils/gameHelpers";
import styles from "./Stage.module.scss";

interface StageProps {
	stage: CellType[][];
}

const Stage = ({ stage }: StageProps) => {
	return (
		<div className={styles.stage}>
			{stage.map((row) =>
				row.map((cell, x) => <Cell key={x} type={cell.value} />)
			)}
		</div>
	);
};

export default Stage;

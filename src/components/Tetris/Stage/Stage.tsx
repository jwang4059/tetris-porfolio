import React from "react";
import Cell from "../Cell/Cell";
import { StageType } from "@/utils/types";
import styles from "./Stage.module.scss";

interface StageProps {
	stage: StageType;
}

const Stage = ({ stage }: StageProps) => {
	return (
		<div className={styles.stage}>
			{stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell} />))}
		</div>
	);
};

export default Stage;

import React from "react";
import Board from "../Board/Board";
import { StageType } from "@/utils/types";
import styles from "./Stage.module.scss";

interface StageProps {
	stage?: StageType;
}

const Stage = ({ stage }: StageProps) => {
	return (
		<div className={styles.stage}>
			<Board matrix={stage} shape="default" />
		</div>
	);
};

export default Stage;

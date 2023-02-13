import React from "react";
import { TETROMINOS } from "@/utils/tetrominos";
import styles from "./Cell.module.scss";

interface CellProps {
	type: string;
}

const Cell = ({ type }: CellProps) => {
	return <div className={styles[type]} />;
};

export default React.memo(Cell);

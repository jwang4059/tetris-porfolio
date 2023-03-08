import React from "react";
import styles from "./Cell.module.scss";

interface CellProps {
	type: string;
}

const Cell = ({ type }: CellProps) => {
	if (type === "0") type = "Default";
	return <div className={styles[type]} />;
};

export default React.memo(Cell);

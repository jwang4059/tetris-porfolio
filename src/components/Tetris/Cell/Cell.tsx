import React from "react";
import styles from "./Cell.module.scss";

interface CellProps {
	type: string;
	locked?: boolean;
}

const Cell = ({ type, locked }: CellProps) => {
	if (type === "0") type = "Default";
	else if (type !== "0" && locked) type = "Locked";

	return <div className={styles[type]} />;
};

export default React.memo(Cell);

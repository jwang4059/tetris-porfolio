import React, { useState, useEffect } from "react";
import Board from "@/components/Tetris/Board/Board";
import styles from "./Scrollbar.module.scss";
import { usePageOffset } from "@/hooks";

type Props = {};

const Scrollbar = (props: Props) => {
	const scrollY = usePageOffset();
	const [maxScrollY, setMaxScrollY] = useState(0);

	useEffect(() => {
		setMaxScrollY(
			document.documentElement.scrollHeight -
				document.documentElement.clientHeight
		);
	}, []);

	const getPagePosition = () => {
		return Math.floor(scrollY / maxScrollY) * 100;
	};

	return (
		<div
			style={{ top: `${getPagePosition()}%` }}
			className={styles["scrollbar"]}
		>
			<Board
				matrix={[["I"], ["I"], ["I"], ["I"]]}
				row={4}
				col={1}
				size={"1em"}
			/>
		</div>
	);
};

export default Scrollbar;

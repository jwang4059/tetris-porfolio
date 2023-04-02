import React, { useState, useEffect } from "react";
import Board from "@/components/Tetris/Board/Board";
import styles from "./Scrollbar.module.scss";
import { usePageOffset } from "@/hooks";

const Scrollbar = () => {
	const scrollProps = usePageOffset();

	const getPagePosition = () => {
		const { scrollY, maxScrollY, scrollHeight } = scrollProps;
		const currentScrollHeight = Math.round(
			(scrollY / maxScrollY) * scrollHeight
		);

		console.log({ currentScrollHeight, scrollHeight });

		return Math.min(currentScrollHeight, scrollHeight);
	};

	return (
		<div
			style={{ top: `calc(${getPagePosition()}px - 16vw)` }}
			className={styles["scrollbar"]}
		>
			<Board
				matrix={[["I"], ["I"], ["I"], ["I"]]}
				row={4}
				col={1}
				size={"4vw"}
			/>
		</div>
	);
};

export default Scrollbar;

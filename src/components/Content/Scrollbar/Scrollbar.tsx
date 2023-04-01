import React, { useState, useEffect } from "react";
import Board from "@/components/Tetris/Board/Board";
import styles from "./Scrollbar.module.scss";
import { usePageOffset } from "@/hooks";

const Scrollbar = () => {
	const scrollY = usePageOffset();
	const [scrollProps, setScrollProps] = useState<{
		maxScrollY: number;
		scrollHeight: number;
	}>({ maxScrollY: 0, scrollHeight: 0 });

	useEffect(() => {
		setScrollProps({
			maxScrollY:
				document.body.scrollHeight - document.documentElement.clientHeight,
			scrollHeight: document.body.scrollHeight,
		});
	}, []);

	const getPagePosition = () => {
		const { maxScrollY, scrollHeight } = scrollProps;
		return Math.round((scrollY / maxScrollY) * scrollHeight);
	};

	return (
		<div
			style={{ top: `calc(${getPagePosition()}px - 4em)` }}
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

import Board from "@/components/Tetris/Board/Board";
import React, { useState, useEffect } from "react";

type Props = {};

const Scrollbar = (props: Props) => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.scrollY);
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div>
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

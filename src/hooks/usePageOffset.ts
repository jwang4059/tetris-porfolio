import { useState, useEffect } from "react";

export const usePageOffset = () => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.scrollY);
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, [offset]);

	return offset;
};

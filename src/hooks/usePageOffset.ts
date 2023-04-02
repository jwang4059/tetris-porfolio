import { useState, useEffect } from "react";

export const usePageOffset = () => {
	const [scrollProps, setScrollProps] = useState<{
		scrollY: number;
		maxScrollY: number;
		scrollHeight: number;
	}>({ scrollY: 0, maxScrollY: 0, scrollHeight: 0 });
	useEffect(() => {
		const onScroll = () =>
			setScrollProps({
				scrollY: window.scrollY,
				maxScrollY:
					document.body.scrollHeight - document.documentElement.clientHeight,
				scrollHeight: document.body.scrollHeight,
			});
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollProps]);

	return scrollProps;
};

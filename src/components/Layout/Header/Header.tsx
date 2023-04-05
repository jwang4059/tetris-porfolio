import React, { useState } from "react";
import NavToggle from "./NavToggle/NavToggle";
import Board from "@/components/Tetris/Board/Board";
import styles from "./Header.module.scss";
import NavMenu from "./NavMenu/NavMenu";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={styles["header"]}>
			<a href=".">
				<Board
					matrix={[
						[
							"",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"",
							"a",
							"",
							"",
							"a",
							"a",
							"",
							"",
							"a",
							"",
							"",
							"a",
							"",
							"",
							"a",
							"a",
							"a",
						],
						[
							"",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"a",
							"",
							"a",
							"a",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"",
						],
						[
							"a",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"",
							"a",
							"",
							"a",
							"a",
							"a",
							"a",
							"",
							"a",
							"",
							"a",
							"a",
							"",
							"a",
							"",
							"a",
							"a",
						],
						[
							"a",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"a",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"a",
						],
						[
							"",
							"a",
							"a",
							"",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"a",
							"",
							"",
							"a",
							"",
							"a",
							"",
							"",
							"a",
							"",
							"",
							"a",
							"a",
							"a",
						],
					]}
					row={5}
					col={25}
					size={"0.25em"}
				/>
			</a>
			<NavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<NavMenu isOpen={isOpen} close={() => setIsOpen(false)} />
		</header>
	);
};

export default Header;

import React, { useState } from "react";
import clsx from "clsx";
import NavToggle from "./NavToggle/NavToggle";
import Board from "@/components/Tetris/Board/Board";
import { resume } from "@/utils/data";
import styles from "./Header.module.scss";

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
			<nav
				className={clsx({
					[styles["nav"]]: true,
					[styles["nav-open"]]: isOpen,
				})}
			>
				<ul className={styles["nav__list"]}>
					<li className={styles["nav__item"]}>
						<a
							className={styles["nav__link"]}
							href="#home"
							onClick={() => setIsOpen(false)}
						>
							Home
						</a>
					</li>
					<li className={styles["nav__item"]}>
						<a
							className={styles["nav__link"]}
							href="#about"
							onClick={() => setIsOpen(false)}
						>
							About Me
						</a>
					</li>
					<li className={styles["nav__item"]}>
						<a
							className={styles["nav__link"]}
							href="#experience"
							onClick={() => setIsOpen(false)}
						>
							Experience
						</a>
					</li>
					<li className={styles["nav__item"]}>
						<a
							className={styles["nav__link"]}
							href="#projects"
							onClick={() => setIsOpen(false)}
						>
							Projects
						</a>
					</li>
					<li className={styles["nav__item"]}>
						<a
							className={styles["nav__link"]}
							href="#contact"
							onClick={() => setIsOpen(false)}
						>
							Contact
						</a>
					</li>
					<li className={styles["nav__item"]}>
						<a
							className={styles["nav__link"]}
							href={resume}
							target="_blank"
							rel="noreferrer"
						>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

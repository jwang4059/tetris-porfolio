import React from "react";
import clsx from "clsx";
import { resume } from "@/utils/data";
import styles from "./NavMenu.module.scss";

interface NavMenuProps {
	isOpen: boolean;
	close: () => void;
}

const NavMenu = ({ isOpen, close }: NavMenuProps) => {
	return (
		<nav
			className={clsx({
				[styles["nav"]]: true,
				[styles["nav-open"]]: isOpen,
			})}
		>
			<ul className={styles["nav__list"]}>
				<li className={styles["nav__item"]}>
					<a className={styles["nav__link"]} href="#home" onClick={close}>
						Home
					</a>
				</li>
				<li className={styles["nav__item"]}>
					<a className={styles["nav__link"]} href="#about" onClick={close}>
						About Me
					</a>
				</li>
				<li className={styles["nav__item"]}>
					<a className={styles["nav__link"]} href="#experience" onClick={close}>
						Experience
					</a>
				</li>
				<li className={styles["nav__item"]}>
					<a className={styles["nav__link"]} href="#projects" onClick={close}>
						Projects
					</a>
				</li>
				<li className={styles["nav__item"]}>
					<a className={styles["nav__link"]} href="#contact" onClick={close}>
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
	);
};

export default NavMenu;

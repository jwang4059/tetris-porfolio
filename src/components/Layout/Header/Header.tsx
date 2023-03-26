import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import NavToggle from "./Nav/NavToggle/NavToggle";
import { resume } from "@/utils/data";
import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={styles["header"]}>
			<div className={styles["logo"]}>{/* <Image src={""} alt={""} /> */}</div>
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

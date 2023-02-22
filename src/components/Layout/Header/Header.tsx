import React, { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import NavToggle from "./Nav/NavToggle/NavToggle";

type Props = {};

const Header = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<div className="logo">
				<Image src={""} alt={""} />
			</div>
			<NavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<nav className={clsx({ nav: true, "nav-open": isOpen })}>
				<ul className="nav__list">
					<li className="nav__item">
						<a
							href="#home"
							className="nav__link"
							onClick={() => setIsOpen(false)}
						>
							Home
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#about"
							className="nav__link"
							onClick={() => setIsOpen(false)}
						>
							About Me
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#experience"
							className="nav__link"
							onClick={() => setIsOpen(false)}
						>
							Experience
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#projects"
							className="nav__link"
							onClick={() => setIsOpen(false)}
						>
							Projects
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#tetris"
							className="nav__link"
							onClick={() => setIsOpen(false)}
						>
							Tetris
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
	return (
		<header>
			<div className="logo">
				<Image src={""} alt={""} />
			</div>
			<button className="nav-toggle" aria-label="toggle navigations">
				<span className="hamburger"></span>
			</button>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<a href="#home" className="nav__link">
							Home
						</a>
					</li>
					<li className="nav__item">
						<a href="#about" className="nav__link">
							About Me
						</a>
					</li>
					<li className="nav__item">
						<a href="#experience" className="nav__link">
							Experience
						</a>
					</li>
					<li className="nav__item">
						<a href="#projects" className="nav__link">
							Projects
						</a>
					</li>
					<li className="nav__item">
						<a href="#tetris" className="nav__link">
							Tetris
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

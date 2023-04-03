import React from "react";
import clsx from "clsx";
import styles from "./NavToggle.module.scss";

interface NavToggleProps {
	isOpen: boolean;
	onClick: () => void;
}

const NavToggle = ({ isOpen, onClick }: NavToggleProps) => {
	return (
		<button
			style={isOpen ? { position: "fixed" } : undefined}
			className={styles["nav-toggle"]}
			aria-label="toggle navigations"
			onClick={onClick}
		>
			<span
				className={clsx({
					[styles["hamburger"]]: true,
					[styles["hamburger__open"]]: isOpen,
				})}
			></span>
		</button>
	);
};

export default NavToggle;

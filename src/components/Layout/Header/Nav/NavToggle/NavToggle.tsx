import React from "react";
import clsx from "clsx";

interface NavToggleProps {
	isOpen: boolean;
	onClick: () => void;
}

const NavToggle = ({ isOpen, onClick }: NavToggleProps) => {
	return (
		<button
			style={isOpen ? { position: "fixed" } : undefined}
			className="nav-toggle"
			aria-label="toggle navigations"
			onClick={onClick}
		>
			<span
				className={clsx({ hamburger: true, hamburger__open: isOpen })}
			></span>
		</button>
	);
};

export default NavToggle;

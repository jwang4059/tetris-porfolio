import React from "react";

interface NavLinkProps {
	className: string;
	href: string;
	onClick: () => void;
}

const NavLink = ({ className, href, onClick }: NavLinkProps) => {
	return (
		<a className={className} href={href} onClick={onClick}>
			Home
		</a>
	);
};

export default NavLink;

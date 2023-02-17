import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer>
			<a href="mailto:jwang4059@gmail.com" className="footer__link">
				jwang4059@gmail.com
			</a>
			<ul className="social-list">
				<li className="social-list__item">
					<a
						href="https://www.linkedin.com/in/jwang4059/"
						target="_blank"
						rel="noreferrer"
						className="social-list__link"
					></a>
				</li>
				<li className="social-list__item">
					<a
						href="https://github.com/jwang4059"
						target="_blank"
						rel="noreferrer"
						className="social-list__link"
					></a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;

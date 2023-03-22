import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles["footer"]} id="contact">
			<a href="mailto:jwang4059@gmail.com" className={styles["footer__link"]}>
				jwang4059@gmail.com
			</a>
			<ul className={styles["social-list"]}>
				<li className={styles["social-list__item"]}>
					<a
						className={styles["social-list__link"]}
						href="https://www.linkedin.com/in/jwang4059/"
						target="_blank"
						rel="noreferrer"
					>
						<SiLinkedin />
					</a>
				</li>
				<li className={styles["social-list__item"]}>
					<a
						className={styles["social-list__link"]}
						href="https://github.com/jwang4059"
						target="_blank"
						rel="noreferrer"
					>
						<SiGithub />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;

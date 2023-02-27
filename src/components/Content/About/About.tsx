import React from "react";
import clsx from "clsx";
import styles from "./About.module.scss";

type Props = {};

const About = (props: Props) => {
	return (
		<section className={styles["about"]} id="about">
			<h1 className={clsx("section__title", styles["section__title--about"])}>
				Who I am
			</h1>
			<div className={styles["about__body"]}>
				<p>
					{`Hi. I'm John, a full stack engineer based in the Bay Area. I specialize in making full stack web applications with React.js , Node.js, and Express.js. When it comes to coding, I'm passionate about working on meaningful projects that can be of use to people. I enjoy building fully, responsive applications that are user friendly and optimized with clean, resusable code.`}
				</p>
				<p>
					{`In my free time, I like working on myself and pushing myself to being the best that I can be. This includes working out, learning new skills, and working on personal projects. Current goals include running a marathon and learning React Native. Besides that, I enjoy going out and spending time with family and friends.`}
				</p>
			</div>
			<a href="#experience" className="btn">
				My Work
			</a>
		</section>
	);
};

export default About;

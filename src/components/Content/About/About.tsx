import React from "react";
import Board from "@/components/Tetris/Board/Board";
import styles from "./About.module.scss";

const About = () => {
	return (
		<section className={styles["about"]} id="about">
			<div className={styles["about__tetris__wrapper"]}>
				<div className={styles["about__tetris"]}>
					<Board
						matrix={[
							["J", "J"],
							["J", ""],
							["J", ""],
						]}
						row={3}
						col={2}
						size={"1em"}
					/>
					<Board
						matrix={[
							["L", "L"],
							["", "L"],
							["", "L"],
						]}
						row={3}
						col={2}
						size={"1em"}
					/>
				</div>
			</div>
			<h1 className={styles["about__title"]}>Who I am</h1>
			<div className={styles["about__body"]}>
				<p>
					{`Hey there, I'm John - a full stack engineer based in the Bay Area. I love building web applications with React.js, Node.js, and Express.js. Making meaningful projects that can help people is what gets me up in the morning! My goal is to create fully responsive, user-friendly applications with clean and reusable code.`}
				</p>
				<p>
					{`In my free time, I like to challenge myself to be the best I can be. That means hitting the gym, learning new skills, and tinkering with personal projects. Right now, I'm training for the SF marathon and teaching myself Kotlin to build cool apps on Android.`}
				</p>
			</div>
			<a className={styles["about__button"]} href="#experience">
				My Work
			</a>
			<div className={styles["about__tetris__wrapper"]}>
				<div className={styles["about__tetris"]}>
					<Board
						matrix={[
							["L", ""],
							["L", ""],
							["L", "L"],
						]}
						row={3}
						col={2}
						size={"1em"}
					/>
					<Board
						matrix={[
							["", "J"],
							["", "J"],
							["J", "J"],
						]}
						row={3}
						col={2}
						size={"1em"}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;

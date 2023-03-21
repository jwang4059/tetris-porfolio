import React from "react";
import Image from "next/image";
import profilePic from "public/profile.jpg";
import styles from "./Introduction.module.scss";

const Introduction = () => {
	return (
		<section className={styles["intro"]} id="home">
			<h1 className={styles["intro__title"]}>
				Hi, I am <strong>John Wang</strong>
			</h1>
			<p className={styles["intro__subtitle"]}>Software Engineer</p>
			<Image
				className={styles["intro__img"]}
				src={profilePic}
				alt="Picture of the author"
			/>
		</section>
	);
};

export default Introduction;

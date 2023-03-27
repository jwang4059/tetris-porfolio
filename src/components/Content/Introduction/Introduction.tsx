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
			<div className={styles["intro__image__wrapper"]}>
				<Image
					style={{ objectFit: "cover" }}
					src={profilePic}
					alt="Picture of the author"
					fill
					sizes="(max-width: 600px) 90vw, 33vw"
					priority
				/>
			</div>
		</section>
	);
};

export default Introduction;

import React from "react";
import Image from "next/image";
import { ExperienceType, experiencesData } from "@/utils/data";
import styles from "./Experience.module.scss";

type Props = {};

const Card = ({ data }: { data: ExperienceType }) => (
	<div className={styles["card"]}>
		<div className={styles["card__image__wrapper"]}>
			<Image src={data.image.src} alt={data.image.alt} fill />
		</div>
		<div className={styles["card__header"]}>
			<h3 className={styles["card__company"]}>{data.company}</h3>
			<span className={styles["card__position"]}>{data.position}</span>
			<span className={styles["card__date"]}>{data.date}</span>
		</div>
		<div className={styles["card__content"]}>
			<p>{data.description}</p>
		</div>
	</div>
);

const Experience = (props: Props) => {
	return (
		<section className={styles["experience"]} id="experience">
			<h2 className="section__title">My Experience</h2>
			<div className={styles["cards__wrapper"]}>
				{experiencesData.map((x) => (
					<Card key={x.company} data={x} />
				))}
			</div>
		</section>
	);
};

export default Experience;

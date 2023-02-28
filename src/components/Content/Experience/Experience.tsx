import React from "react";
import Image from "next/image";
import { ExperienceType, experiencesData } from "@/utils/data";
import styles from "./Experience.module.scss";

type Props = {};

const Card = ({ data }: { data: ExperienceType }) => (
	<div className={styles["card"]}>
		<div className={styles["card__image__wrapper"]}>
			<Image src={data.image.src} alt={data.image.alt} />
		</div>
		<div className={styles["card__header"]}>
			<h3>{data.company}</h3>
			<span>{data.position}</span>
			<span>{data.date}</span>
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
			{experiencesData.map((x) => (
				<Card key={x.company} data={x} />
			))}
		</section>
	);
};

export default Experience;

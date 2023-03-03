import React from "react";
import Image from "next/image";
import Tetris from "@/components/Tetris/Tetris/Tetris";
import { ProjectType, projectsData, iconMap } from "@/utils/data";
import styles from "./Projects.module.scss";

type Props = {};

const Project = ({ data }: { data: ProjectType }) => {
	return (
		<section className={styles["project"]}>
			<div className={styles["project__image__wrapper"]}>
				<Image
					style={{ objectFit: "contain" }}
					src={data.image.src}
					alt={data.image.alt}
					fill
				/>
			</div>
			<div className={styles["project__info"]}>
				<h3 className={styles["project__title"]}>{data.title}</h3>
				<p className={styles["project__subtitle"]}>{data.subtitle}</p>
				<a
					className={styles["project__repo"]}
					href={data.repo}
					target="_blank"
					rel="noreferrer"
				>
					Source Code
				</a>
				<p className={styles["project__description"]}>{data.description}</p>
				{/* <div className="project__icons">
					{data.stack
						? data.stack.map((logo) => (
								<Icon key={logo.src} logo={logo.src}>
									{logo.name}
								</Icon>
						  ))
						: null}
				</div> */}
				{data?.url ? (
					<a
						className={styles["project__link"]}
						href={data.url}
						target="_blank"
						rel="noreferrer"
					>
						See Live
					</a>
				) : null}
			</div>
		</section>
	);
};

const Projects = (props: Props) => {
	return (
		<section className="my-projects" id="projects">
			<h2 className={styles["projects__title"]}>My Projects</h2>
			<div>{/* <Tetris /> */}</div>
			<div className={styles["projects__wrapper"]}>
				{projectsData.map((project) => (
					<Project key={project.title} data={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;

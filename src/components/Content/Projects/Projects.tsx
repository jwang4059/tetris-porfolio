import React from "react";
import Image from "next/image";
import { ProjectType, projectsData, iconMap } from "@/utils/data";
import styles from "./Projects.module.scss";

type Props = {};

const Project = ({ data }: { data: ProjectType }) => {
	return (
		<section className={styles["project"]}>
			<div className={styles["project__image__wrapper"]}>
				<Image
					style={{ objectFit: "cover" }}
					src={data.image.src}
					alt={data.image.alt}
					fill={true}
				/>
			</div>
			<div className={styles["project__info"]}>
				<h3 className={styles["project__title"]}>{data.title}</h3>
				<p className={styles["project__subtitle"]}>{data.subtitle}</p>
				<a className={styles["project__repo"]} href={data.repo}>
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
					<a className={styles["project__link"]} href={data.url}>
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
			<h2 className="section__title">My Projects</h2>
			<div className={styles["projects__wrapper"]}>
				{projectsData.map((project) => (
					<Project key={project.title} data={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;

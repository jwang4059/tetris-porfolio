import React from "react";
import Image from "next/image";
import { projectsData, iconMap } from "@/utils/data";

type Props = {};

interface ProjectProps {
	data: {
		title: string;
		subtitle: string;
		description: string;
		stack?: string[];
		repo: string;
		url?: string;
	};
}

const Project = ({ data }: ProjectProps) => {
	return (
		<section className="project">
			<div className="project__image__wrapper">
				<Image src={""} alt={""} />
			</div>
			<div className="project__info">
				<h3 className="project__title">{data.title}</h3>
				<p className="project__subtitle">{data.subtitle}</p>
				<a className="project__repo" href={data.repo}>
					Source Code
				</a>
				<p className="project__description">{data.description}</p>
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
					<a className="project__link" href={data.url}>
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
			{projectsData.map((project) => (
				<Project key={project.title} data={project} />
			))}
		</section>
	);
};

export default Projects;

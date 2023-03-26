import Image from "next/image";
import React, { useRef } from "react";
import { useWindowDimensions } from "@/hooks";
import { IconType } from "react-icons/lib";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import Tetris from "@/components/Tetris/Tetris/Tetris";
import { ProjectType, projectsData, iconMap } from "@/utils/data";
import styles from "./Projects.module.scss";

const StackIcon = ({ name, Icon }: { name: string; Icon: IconType }) => (
	<li className={styles["project__icons__list__item"]}>
		<span className={styles["project__icon__image"]}>
			<Icon />
		</span>
		<span className={styles["project__icon__name"]}>{name}</span>
	</li>
);

const Project = ({ data }: { data: ProjectType }) => {
	const iconListRef = useRef<HTMLUListElement>(null);

	const scroll = (offset: number) => {
		if (iconListRef.current) iconListRef.current.scrollLeft += offset;
	};

	return (
		<section className={styles["project"]}>
			<div className={styles["project__image__wrapper"]}>
				<Image
					style={{ objectFit: "contain" }}
					src={data.image.src}
					alt={data.image.alt}
					fill
					sizes="(max-width: 600px) 100vw, 33vw"
				/>
			</div>
			<div className={styles["project__info"]}>
				<h3 className={styles["project__title"]}>{data.title}</h3>
				<p className={styles["project__subtitle"]}>{data.subtitle}</p>
				<div className={styles["project__repo__wrapper"]}>
					<a
						className={styles["project__repo"]}
						href={data.repo}
						target="_blank"
						rel="noreferrer"
						role="button"
					>
						<SiGithub /> Github
					</a>
				</div>
				<p className={styles["project__description"]}>{data.description}</p>
				{data.stack && (
					<div className={styles["project__stack"]}>
						<button
							className={styles["project__stack__navigation__arrow"]}
							aria-label="Scroll Left"
							onClick={() => scroll(-25)}
						>
							<MdChevronLeft />
						</button>
						<ul ref={iconListRef} className={styles["project__icons__list"]}>
							{data.stack.map((x) => (
								<StackIcon
									key={x}
									name={iconMap[x].name}
									Icon={iconMap[x].icon}
								/>
							))}
						</ul>
						<button
							className={styles["project__stack__navigation__arrow"]}
							aria-label="Scroll Right"
							onClick={() => scroll(25)}
						>
							<MdChevronRight />
						</button>
					</div>
				)}
				{data.url && (
					<a
						className={styles["project__link"]}
						href={data.url}
						target="_blank"
						rel="noreferrer"
					>
						See Live
					</a>
				)}
			</div>
		</section>
	);
};

const Projects = () => {
	const { width } = useWindowDimensions();

	return (
		<section className={styles["projects"]} id="projects">
			<h2 className={styles["projects__title"]}>My Projects</h2>
			{width && width > 640 && <Tetris />}

			<div className={styles["projects__wrapper"]}>
				{projectsData.map((project) => (
					<Project key={project.title} data={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;

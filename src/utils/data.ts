import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";
import {
	SiTypescript,
	SiReact,
	SiRedux,
	SiGatsby,
	SiNextdotjs,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiRedis,
	SiNetlify,
	SiHeroku,
	SiVercel,
	SiDigitalocean,
	SiSass,
	SiTailwindcss,
	SiMaterialui,
	SiFramer,
	SiStyledcomponents,
	SiExpo,
} from "react-icons/si";

import cmsPic from "public/gatsbyblog.png";
import tangolandPic from "public/tangoland.png";
import fabflixPic from "public/fabflix.png";
import portfolioPIc from "public/portfolio.png";
import ckiPIc from "public/ucicirclek.png";
import feelPic from "public/feel.jpg";
import finicastPic from "public/finicast.png";

type IconMapType = {
	[index: string]: {
		name: string;
		icon: IconType;
	};
};

export const iconMap: IconMapType = {
	typescript: {
		name: "TypeScript",
		icon: SiTypescript,
	},
	react: {
		name: "React",
		icon: SiReact,
	},
	native: {
		name: "React Native",
		icon: SiReact,
	},
	expo: {
		name: "Expo",
		icon: SiExpo,
	},
	redux: {
		name: "Redux",
		icon: SiRedux,
	},
	gatsby: {
		name: "GatsbyJS",
		icon: SiGatsby,
	},
	next: {
		name: "Next.js",
		icon: SiNextdotjs,
	},
	node: {
		name: "nodeJS",
		icon: SiNodedotjs,
	},
	express: {
		name: "Express",
		icon: SiExpress,
	},
	mongodb: {
		name: "mongoDB",
		icon: SiMongodb,
	},
	postgres: {
		name: "PostgreSQL",
		icon: SiPostgresql,
	},
	redis: {
		name: "redis",
		icon: SiRedis,
	},
	netlify: {
		name: "netlify",
		icon: SiNetlify,
	},
	heroku: {
		name: "HEROKU",
		icon: SiHeroku,
	},
	vercel: {
		name: "Vercel",
		icon: SiVercel,
	},
	digitalocean: {
		name: "DigitalOcean",
		icon: SiDigitalocean,
	},
	sass: {
		name: "Sass",
		icon: SiSass,
	},
	tailwind: {
		name: "tailwindcss",
		icon: SiTailwindcss,
	},
	styled: {
		name: "styled components",
		icon: SiStyledcomponents,
	},
	mui: {
		name: "MUI",
		icon: SiMaterialui,
	},
	motion: {
		name: "Motion",
		icon: SiFramer,
	},
};

export type ExperienceType = {
	image: {
		src: StaticImageData;
		alt: string;
	};
	company: string;
	position: string;
	date: string;
	description: string;
	url?: string;
};

export const experiencesData: ExperienceType[] = [
	{
		image: {
			src: finicastPic,
			alt: "Finicast Logo Pic",
		},
		company: "Finicast, Inc.",
		position: "Full Stack Engineer",
		date: "July 2021 - Sep 2022",
		description:
			"As a full-stack engineer at Finicast, a San Mateo-based fintech startup, I was responsible for developing new features and enhancing the user interface of our financial planning software. My role involved working on both the frontend and backend, creating new API endpoints, addressing security vulnerabilities identified through penetration testing, and optimizing our end-to-end testing process. Through my contributions, I have introduced new features, improved code readability, and streamlined testing, resulting in a more efficient and user-friendly platform.",
		url: "https://finicast.com/",
	},
];

export type ProjectType = {
	image: {
		src: StaticImageData;
		alt: string;
	};
	title: string;
	subtitle: string;
	description: string;
	stack?: string[];
	repo: string;
	url?: string;
};

export const projectsData: ProjectType[] = [
	{
		image: {
			src: feelPic,
			alt: "Feel Image",
		},
		title: "Feel",
		subtitle: "Mobile Application",
		description:
			"Feel is a mobile app that helps users understand their emotions. With an intuitive UI, users can explore different emotions and recognize what they're feeling. The app explains a broad range of emotions and lets users choose the one that best describes their current state.",
		stack: ["native", "expo", "styled", "typescript"],
		repo: "https://github.com/jwang4059/Feel",
	},
	{
		image: {
			src: ckiPIc,
			alt: "UCI Circle K Image",
		},
		title: "UCI Circle K Clone",
		subtitle: "Full Stack Web Application",
		description: `UCI Circle K Clone is a website I successfully redesigned and developed using cutting-edge technologies like TypeScript, React, Next.js, Tailwind CSS, Node, and Express. By refactoring the legacy LAMP stack website, I was able to boost performance and enhance SEO ranking by implementing Next.js static generation and server-side rendering features.`,
		stack: [
			"react",
			"next",
			"node",
			"express",
			"postgres",
			"redis",
			"typescript",
			"digitalocean",
		],
		repo: "https://github.com/jwang4059/ucicki-web",
	},
	{
		image: {
			src: portfolioPIc,
			alt: "My Portfolio Image",
		},
		title: "Portfolio (deprecated)",
		subtitle: "Portfolio",
		description: `My deprecated portfolio was a clean and responsive website developed using React, GatsbyJS, Eslint, and Typescript. The website features animated components with Framer Motion and was designed using Tailwind CSS. To improve performance, HTML pre-rendering and client-side navigation were incorporated with GatsbyJS.`,
		stack: ["react", "gatsby", "typescript", "tailwind", "motion"],
		repo: "https://github.com/jwang4059/jwang4059-portfolio",
	},
	{
		image: {
			src: fabflixPic,
			alt: "Fabflix Image",
		},
		title: "Fabflix",
		subtitle: "Full Stack Web Application",
		description: `Fabflix is a full-stack web app that allows users to search and browse movies from The Movie Database API. Features include bookmarking and creating an account. It is designed with React, Redux, React Router, and Material UI on the frontend, and Express.js on the backend with a secure PostgreSQL database solution.`,
		stack: ["react", "redux", "node", "express", "postgres", "heroku", "mui"],
		repo: "https://github.com/jwang4059/fabflix",
	},
	{
		image: {
			src: tangolandPic,
			alt: "TangoLand Image",
		},
		title: "TangoLand",
		subtitle: "Full Stack Web Application",
		description: `TangoLand is a full-stack web application that tests users on common Japanese expressions, letting them choose which words to study and how. The project showcases expertise in React, Redux, and Material UI, while Express.js and MongoDB form the backbone of the backend infrastructure.`,
		stack: ["react", "redux", "node", "express", "mongodb", "heroku", "mui"],
		repo: "https://github.com/jwang4059/tangoland",
	},
	{
		image: {
			src: cmsPic,
			alt: "Gatsby Blog Image",
		},
		title: "ZTM Gatsby Starter",
		subtitle: "Gatsby Blog Starter Kit",
		description: `ZTM Gatsby + Netlify CMS Starter is an innovative starter kit for a GatsbyJS blog. Seamlessly integrating data from MDX files, users can quickly create and publish blog posts through Netlify CMS. Pagination functionality enhances user experience with faster load times and improved navigation.`,
		stack: ["react", "gatsby", "netlify", "tailwind"],
		repo: "https://github.com/jwang4059/ztm-gatsby-netlify-cms-blog-starter",
	},
];

export const resume =
	"https://drive.google.com/file/d/1ySPUwHpSqGlgrkIwiv_c2POsztZ3MMX_/view?usp=sharing";

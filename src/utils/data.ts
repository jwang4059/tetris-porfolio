import { StaticImageData } from "next/image";
import cmsPic from "public/gatsbyblog.png";
import tangolandPic from "public/tangoland.png";
import fabflixPic from "public/fabflix.png";
import portfolioPIc from "public/portfolio.png";
import ckiPIc from "public/ucicirclek.png";

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
} from "react-icons/si";

export const iconMap = {
	typescript: {
		name: "TypeScript",
		icon: SiTypescript,
	},
	react: {
		name: "React",
		icon: SiReact,
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
	mui: {
		name: "MUI",
		icon: SiMaterialui,
	},
	framer: {
		name: "Motion",
		icon: SiFramer,
	},
};

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
			src: ckiPIc,
			alt: "UCI Circle K Image",
		},
		title: "ucicirclek.xyz",
		subtitle: "Full Stack Web Application",
		description: `This is my clone of the UCI Circle K website. I am currently working on refactoring the original LAMP stack website with modern web development technologies. My goal is to improve overall SEO, performance, and responsiveness of the original website.`,
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
		url: "https://ucicirclek.vercel.app/",
	},
	{
		image: {
			src: portfolioPIc,
			alt: "My Portfolio Image",
		},
		title: "johnwang.netlify.app",
		subtitle: "Portfolio",
		description: `This is my portfolio website. It is clean, simple, and built with modern web development technology such as TypeScript, React, GatsbyJS, Tailwind CSS, and Framer Motion.`,
		stack: ["react", "gatsby", "typescript", "tailwind", "motion"],
		repo: "https://github.com/jwang4059/jwang4059-portfolio",
		url: "https://johnwang.netlify.app/",
	},
	{
		image: {
			src: fabflixPic,
			alt: "Fabflix Image",
		},
		title: "Fabflix",
		subtitle: "Full Stack Web Application",
		description: `Fabflix is a full stack web application that displays a list of movies from The Movie Database API. It offers features like searching and browsing to help users find movies they would be interested in. Users have the option of creating an account and bookmarking movies for future references.`,
		stack: ["react", "redux", "node", "express", "postgres", "heroku", "mui"],
		repo: "https://github.com/jwang4059/fabflix",
		url: "https://fabflixmovies.vercel.app/",
	},
	{
		image: {
			src: tangolandPic,
			alt: "TangoLand Image",
		},
		title: "TangoLand",
		subtitle: "Full Stack Web Application",
		description: `TangoLand is a simple flashcard web application that test users on common Japanese expressions. This app lets users select which words they would like to study and how they want to study them.`,
		stack: ["react", "redux", "node", "express", "mongodb", "heroku", "mui"],
		repo: "https://github.com/jwang4059/tangoland",
		url: "https://tangoland.vercel.app/",
	},
	{
		image: {
			src: cmsPic,
			alt: "Gatsby Blog Image",
		},
		title: "ZTM Gatsby + Netlify CMS Starter",
		subtitle: "Gatsby Blog Starter Kit",
		description: `ZTM Gatsby + Netlify CMS Starter is a new up to date starter kit for a GatsbyJS blog. It connects to Netlify CMS to make it easier for users to create blog posts. On top of that, it has been built with Tailwind.css, a modern CSS framework that makes it easy for users to theme and customize their project.`,
		stack: ["react", "gatsby", "netlify", "tailwind"],
		repo: "https://github.com/jwang4059/ztm-gatsby-netlify-cms-blog-starter",
		url: "",
	},
];

export const resume =
	"https://drive.google.com/file/d/16NnpfZ7YeX5WKork8Na5vuBpjn1xHs2G/view?usp=sharing";

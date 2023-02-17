import React from "react";

type Props = {};

const About = (props: Props) => {
	return (
		<section className="about-me" id="about">
			<h1 className="section__title section__title--about">Who I am</h1>
			<p className="section__subtitle section__subtitle--about">
				Software Engineer
			</p>
			<div className="about-me__body">
				<p></p>
				<p></p>
			</div>
		</section>
	);
};

export default About;

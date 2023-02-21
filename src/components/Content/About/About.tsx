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
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
					perspiciatis sapiente voluptatum iure excepturi corporis deserunt
					animi autem iste magni dolore est itaque provident nostrum assumenda
					labore laboriosam, repudiandae facilis!
				</p>
				<p></p>
			</div>
			<a href="#experience" className="btn">
				Learn More
			</a>
		</section>
	);
};

export default About;

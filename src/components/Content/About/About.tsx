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
					{`Hi. I'm John, a full stack web developer based in the Bay Area. I specialize in making full stack web applications with React.js , Node.js, and Express.js. When it comes to coding, I'm passionate about working on meaningful projects that can be of use to people. I enjoy building fully, responsive applications that are user friendly and optimized with clean, resusable code.`}
				</p>
				<p>{`In my free time, I like working on myself and pushing myself to being the best that I can be. This includes working out, learning new skills, and working on personal projects. Current goals include running a marathon and learning React Native. Besides that, I enjoy going out and spending time with family and friends.`}</p>
			</div>
			<a href="#experience" className="btn">
				Learn More
			</a>
		</section>
	);
};

export default About;

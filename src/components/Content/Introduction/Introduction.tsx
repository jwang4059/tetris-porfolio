import Image from "next/image";
import React from "react";

type Props = {};

const Introduction = (props: Props) => {
	return (
		<section className="intro" id="home">
			<h1 className="section__title section__title--intro">
				Hi, I am <strong>John Wang</strong>
			</h1>
			<p className="section__subtitle section__subtitle--intro">
				Software Engineer
			</p>
			<Image src={""} alt={""} />
		</section>
	);
};

export default Introduction;

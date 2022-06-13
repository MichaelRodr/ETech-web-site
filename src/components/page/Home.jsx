import React from "react";
import Nosotros from "../section/Nosotros";
import HeroSlider from "../slider/HeroSlider";

const Home = () => {
	return (
		<div>
			<div className='hero-slider'>
				<HeroSlider />
			</div>
			<section>
				<Nosotros />
			</section>
		</div>
	);
};

export default Home;

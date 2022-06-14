import SimpleImageSlider from "react-simple-image-slider";
import "./HeroSlider.css";

const HeroSlider = () => {
	const images = [
		{url: "http://localhost:3000/src/assets/images/background/Monitoreo.png"},
		{url: "http://localhost:3000/src/assets/images/background/laboratorio.png"},
		{url: "http://localhost:3000/src/assets/images/background/laboratorio.png"},
		{url: "http://localhost:3000/src/assets/images/background/trailer.jpg"},
	];

	return (
		<div className='fade'>
			<SimpleImageSlider
				width={1400}
				height={900}
				images={images}
				showBullets={true}
				showNavs={true}
				slideDuration={1.2}
			/>
		</div>
	);
};

export default HeroSlider;

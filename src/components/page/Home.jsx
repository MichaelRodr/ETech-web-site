import SimpleImageSlider from 'react-simple-image-slider';
import Navigation from '../header/Navigation';

const Home = () => {
	const IMAGES = [
		{ url: 'http://localhost:3000/src/assets/images/background/Monitoreo.png' },
		{ url: 'http://localhost:3000/src/assets/images/background/Monitoreo.png' },
		{ url: 'http://localhost:3000/src/assets/images/background/Monitoreo.png' },
		{ url: 'http://localhost:3000/src/assets/images/background/Monitoreo.png' },
	];
	return (
		<>
			<div>
				<header>
					<Navigation />
				</header>
				<div>
					<SimpleImageSlider
						width={1400}
						height={900}
						images={IMAGES}
						showBullets={true}
						showNavs={true}
					/>
				</div>
			</div>
		</>
	);
};

export default Home;

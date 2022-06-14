import SimpleImageSlider from 'react-simple-image-slider';
import Navigation from '../header/Navigation';

const Home = () => {
	const IMAGES = [
		{
			url: 'http://localhost:3000/src/assets/images/background/Monitoreo.png',
			msj: ' Trnasmision de datos',
		},
		{ url: 'http://localhost:3000/src/assets/images/background/pozo.jpg' },
		{ url: 'http://localhost:3000/src/assets/images/background/Laboratorio.png' },
		{ url: 'http://localhost:3000/src/assets/images/background/trailer.jpg' },
	];

	const TITULO = [
		{ dato: 'Transmision de datos' },
		{ dato: 'Wist y Wist WL' },
		{ dato: 'Wist y Wist WL' },
		{ dato: 'Wist y Wist WL' },
	];

	return (
		<>
			<header>
				<Navigation />
			</header>
			<div className='container'>
				<h1 className='title'>Transmision de datos </h1>
				<SimpleImageSlider
					className='slider'
					width={1440}
					height={900}
					images={IMAGES}
					showBullets={true}
					showNavs={true}
				/>
			</div>
		</>
	);
};

export default Home;

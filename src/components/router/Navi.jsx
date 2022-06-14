import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../../App';
import Navigation from '../header/Navigation';
import Empresa from '../page/Empresa';
import Servicios from '../page/Servicios';
import Contacto from '../page/Contacto';
import Home from '../page/Home';

const Navi = () => {
	return (
		<>
			<Router>
				<Navigation />
				<Routes>
					<Route exac path='/' element={<App />} />
					<Route exac path='home' element={<Home />} />
					<Route exac path='servicios' element={<Servicios />} />
					<Route exac path='empresa' element={<Empresa />} />
					<Route exac path='contacto' element={<Contacto />} />

					<Route exac path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</Router>
		</>
	);
};

export default Navi;

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "../page/Home";
import Nosotros from "../section/Nosotros";

export const Navigation = () => {
	return (
		<div className='container'>
			<Router>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/nosotros' element={<Nosotros />} />
				<Route exact path='/servicios' element={<Servicios />} />
				<Route exact path='/clientes' element={<Clientes />} />
				<Route exact path='/empresa' element={<Empresa />} />
				<Route exact path='/contacto' element={<Contacto />} />
			</Router>
		</div>
	);
};

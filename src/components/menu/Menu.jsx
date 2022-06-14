import "./Menu.css";
import {Link} from "react-router-dom";

const Menu = (props) => {
	return (
		<div className='container'>
			<div className='Logo'>
				<img
					className='logo'
					src='http://localhost:3000/src/assets/images/logos/etech.png'
					alt='Logo etech mexico'
				/>
			</div>
			<nav>
				<div className='menu'>
					<Link className='navi-link' to='/'>
						Home
					</Link>
				</div>
				<div className='menu'>
					<Link className='navi-link' to='/servicios'>
						Servicios
					</Link>
				</div>
				<div className='menu'>
					<Link className='navi-link' to='/empresa'>
						Empresa
					</Link>
				</div>
				<div className='menu'>
					<Link className='navi-link' to='/contacto'>
						Contacto
					</Link>
				</div>
			</nav>
			<div className='btn-language'>
				<img
					className='icon-language'
					src='http://localhost:3000/src/assets/icons/mexico.png'
					alt='Logo etech mexico'
				/>
			</div>
		</div>
	);
};

export default Menu;

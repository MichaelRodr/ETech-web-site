import "./Menu.css";
import {Link} from "react-router-dom";

const Menu = (props) => {
	return (
		<div className='container'>
			<div className='Logo'>
				<img src='../' alt='Logo etech mexico' />
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
			<div className='Logo'>
				<img
					src='././assets/images/logos/etech-Logo.png'
					alt='Logo etech mexico'
				/>
			</div>
		</div>
	);
};

export default Menu;

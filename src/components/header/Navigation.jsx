import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
	<style type='text/css'>
		{`
    .
    `}
	</style>;

	return (
		<div>
			<Navbar bg='dark' variant='dark' sticky='top'>
				<Container>
					<Navbar.Brand href='#home'>Navbar</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link to='/'>Home</Nav.Link>
						<Nav.Link to='/servicios'>Servicios</Nav.Link>
						<Nav.Link to='/empresa'>Empresa</Nav.Link>
						<Nav.Link to='/contacto'>Contacto</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;

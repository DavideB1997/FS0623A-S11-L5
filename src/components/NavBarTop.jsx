import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarTop = () => {
	return (
		<Navbar className='mb-3'>
			<Col
				className='col-9 col-lg-12 mainLinks d-none d-md-flex'
				style={{ paddingLeft: '50px' }}
			>
				<Nav.Link href='/'>Trending</Nav.Link>
				<Nav.Link href='/'>Podcast</Nav.Link>
				<Nav.Link href='/'>Moods and Genres</Nav.Link>
				<Nav.Link href='/'>New Releases</Nav.Link>
				<Nav.Link href='/'>Discover</Nav.Link>
			</Col>
		</Navbar>
	);
};

export default NavBarTop;

import { Button, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { VscLibrary } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import SpotifyLogo from '../assets/logo/Spotify_Logo.png';

const Side = () => {
	return (
		<Navbar className='navbar fixed-left justify-content-between'>
			<Nav className='nav-btn mx-auto h3 d-flex flex-column'>
				<Navbar.Brand className='mx-auto'>
					<Image src={SpotifyLogo} width='150' height='40' />
				</Navbar.Brand>
				<Row>
					<Nav.Link href='/'>
						{' '}
						<FaHome />
						Home
					</Nav.Link>
					<Nav.Link href='/'>
						{' '}
						<VscLibrary /> Library
					</Nav.Link>
					<Nav.Link href='/Favourites'>
						{' '}
						<MdFavorite /> Favourites
					</Nav.Link>
				</Row>
			</Nav>
			<div className='nav-btn'>
				<button className='btn signup-btn' type='button'>
					Sign Up
				</button>
				<button className='btn login-btn' type='button'>
					Login
				</button>
				<div>
					<a href='#'> Cookie Policy</a> |<a href='#'> Privacy</a>
				</div>
			</div>
		</Navbar>
	);
};

export default Side;

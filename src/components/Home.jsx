import { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchAction } from '../redux/actions';
import Playlist from './Playlist';

const Home = () => {
	const [query, setQuery] = useState('');
	const search = useSelector((state) => state.search.data);

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(getSearchAction(query));
	};

	return (
		<>
			<div>
				<Form onSubmit={handleSubmit}>
					<Form.Control
						type='search'
						value={query}
						onChange={handleChange}
						placeholder='type and press Enter'
					/>
				</Form>
				{console.log(search)}
			</div>
			<Row>
				<h2 className='text-white'> Search Results!</h2>
				{search &&
					search.map((song, i) => (
						<Card
							style={{ width: '14rem' }}
							key={i} // Use 'i' directly as the key
							className='bg-transparent border-0'
						>
							<Link to={`/album/${song.album.id}`} className='imgLinks'>
								<Card.Img variant='top' src={song.album?.cover_medium} />
							</Link>
							<Card.Title className='text-center text-white'>{song.title}</Card.Title>
							<Card.Body>
								<Row>
									<Col>
										<Link to={`/album/${song.album.id}`}>
											Album:{' '}
											{song.album?.title?.slice(0, 16) +
												(song.album?.title?.length > 16 ? '...' : '')}
										</Link>
									</Col>
									<Col>
										<Link to={`/artist/${song.artist.name}`}>
											Artist: {song.artist?.name}
										</Link>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					))}
			</Row>

			<Playlist />
		</>
	);
};

export default Home;

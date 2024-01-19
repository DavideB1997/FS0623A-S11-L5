import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleSong = (props) => {
	const [song, setSong] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.search}`
				);
				if (response.ok) {
					const data = await response.json();
					setSong(data.data[props.num]);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [props.search]);

	return (
		<>
			{song && (
				<Card
					style={{ width: '14rem' }}
					key={props.key}
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
			)}
		</>
	);
};

export default SingleSong;

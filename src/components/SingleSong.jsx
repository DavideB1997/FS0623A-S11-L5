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
					setSong(data.data[0]);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
		console.log(song);
	}, [props.search]);

	return (
		<>
			{song && (
				<Card
					style={{ width: '14rem' }}
					key={props.key}
					className='bg-transparent border-0'
				>
					<Link to={`/album/${song.album.id}`}>
						<Card.Img variant='top' src={song.album?.cover_medium} />
					</Link>

					<Card.Body>
						<Card.Title>{song.title}</Card.Title>
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

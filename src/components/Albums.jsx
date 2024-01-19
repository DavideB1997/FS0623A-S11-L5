import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Albums = () => {
	const { id } = useParams();
	const [album, setAlbum] = useState(null);
	const [songs, setSongs] = useState(null);

	const fetchAlbum = async () => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`
			);
			if (response.ok) {
				const data = await response.json();
				setAlbum(data);
				setSongs(data.tracks.data);
			} else {
				console.log('Error getting album');
			}
		} catch (error) {
			console.log('Error catching album:', error);
		}
	};

	useEffect(() => {
		fetchAlbum();
	}, [id]);

	console.log(album, songs);

	return (
		<>
			<Col className='col-12 mainPage'>
				<Row>
					<Col className='col-4'>
						<div className='Albums' id='Albums'>
							<div className='text-center'>
								<img src={album?.cover_big} class='card-img fluid' alt='Album Poster' />
								<p class='album-title'>{album?.title}</p>
							</div>
							<div className='text-center'>
								<p class='artist-name'>{album?.artist.name}</p>
							</div>
							<div className='text-center'>
								<button id='btnPlay' class='btn btn-success'>
									Play
								</button>
							</div>
						</div>
					</Col>
					<Col className='col-6'>
						<Row>
							{songs &&
								songs.map((song, i) => (
									<div className='tackHover' key={i}>
										<Link
											to='#'
											class='card-title trackHover px-3 d-flex justify-content-between'
											style={{ color: 'white' }}
										>
											{song.title}

											<span>
												{Math.floor(parseInt(song.duration) / 60)}:
												{parseInt(song.duration) % 60 < 10
													? '0' + (parseInt(song.duration) % 60)
													: parseInt(song.duration) % 60}
											</span>
										</Link>
									</div>
								))}
						</Row>
					</Col>
				</Row>
			</Col>
		</>
	);
};

export default Albums;

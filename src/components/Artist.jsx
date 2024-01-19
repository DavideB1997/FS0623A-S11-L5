import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

import SingleSong from './SingleSong';

const Artist = () => {
	const { id } = useParams();
	const [artist, setArtist] = useState(null);

	const fetchArtist = async () => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`
			);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setArtist(data);
			} else {
				console.log('Error getting Artist');
			}
		} catch (error) {
			console.log('Error catching Artist:', error);
		}
	};

	useEffect(() => {
		fetchArtist();
		console.log(artist);
	}, [id]);

	return (
		<>
			<Col className='col-12 mainPage'>
				<Row>
					<Col className='col-4'>
						<div className='Albums' id='Albums'>
							<div className='text-center'>
								<img
									src={artist?.picture_big}
									class='card-img fluid'
									alt='Album Poster'
								/>
							</div>
							<div className='text-center'>
								<p class='artist-name'>{artist?.name}</p>
							</div>
						</div>
					</Col>
					<Col className='col-6'>
						<Row>
							<SingleSong search={id} num={0} />
							<SingleSong search={id} num={1} />
							<SingleSong search={id} num={2} />
							<SingleSong search={id} num={3} />
						</Row>
					</Col>
				</Row>
			</Col>
		</>
	);
};

export default Artist;

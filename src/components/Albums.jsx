import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
	addToFavouriteAction,
	addToMusicPlayerAction,
	removeFromFavouriteAction,
} from '../redux/actions';

const Albums = () => {
	const { id } = useParams();
	const [album, setAlbum] = useState(null);
	const [songs, setSongs] = useState(null);

	const favourites = useSelector((state) => state.favourite.list);
	const dispatch = useDispatch();

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

	return (
		<>
			<Col className='col-12 mainPage'>
				<Row>
					<Col className='col-4'>
						{album ? (
							<div className='Albums' id='Albums'>
								<div className='text-center'>
									<img src={album.cover_big} class='card-img fluid' alt='Album Poster' />
								</div>
								<div className='text-center'>
									<Link to={`/album/${album?.title}`}>{album?.title}</Link>
								</div>
								<div className='text-center'>
									<Link to={`/artist/${album?.artist.name}`}>
										Artist: {album.artist?.name}
									</Link>
								</div>
								<div className='text-center'>
									<button id='btnPlay' class='btn btn-success'>
										Play
									</button>
								</div>
							</div>
						) : (
							<p>Loading album...</p>
						)}
					</Col>
					<Col className='col-6'>
						<Row>
							{songs &&
								songs.map((song, i) => (
									<div className='tackHover d-flex justify-content-evenly' key={i}>
										<Link
											to='#'
											className='card-title trackHover px-3 d-flex justify-content-between'
											style={{ color: 'white' }}
											onClick={() => dispatch(addToMusicPlayerAction(song))}
										>
											{song.title}
											<span>
												{Math.floor(parseInt(song.duration) / 60)}:
												{parseInt(song.duration) % 60 < 10
													? '0' + (parseInt(song.duration) % 60)
													: parseInt(song.duration) % 60}
											</span>
										</Link>

										{favourites.includes(song.title) ? (
											<MdFavorite
												color='green'
												size={32}
												className='mr-2 my-auto'
												onClick={() => dispatch(removeFromFavouriteAction(song.title))}
											/>
										) : (
											<MdFavoriteBorder
												color='green'
												size={32}
												className='mr-2 my-auto'
												onClick={() => dispatch(addToFavouriteAction(song.title))}
											/>
										)}
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

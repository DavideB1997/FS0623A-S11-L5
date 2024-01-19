import { Col, Row } from 'react-bootstrap';
import SingleSong from './SingleSong';

const Playlist = () => {
	const elementiPlaylist1 = [
		'queen',
		'led zeppelin',
		'metallica',
		'Aerosmith',
		'U2',
	];
	const elementiPlaylist2 = [
		'LadyGaga',
		'Katy Perry',
		'Justin Bieber',
		'Miley Cyrus',
		'Ariana Grande',
	];
	const elementiPlaylist3 = [
		'Eminem',
		'Ice Cube',
		'50 Cent',
		'Drake',
		'Nicki Minaj',
	];

	const renderPlaylist = (title, elementi) => (
		<div>
			<Row>
				<h2>{title}</h2>
				{elementi.map((elemento, i, genre) => (
					<SingleSong search={elemento} num={0} key={`${genre}_${i}`} />
				))}
			</Row>
		</div>
	);

	return (
		<>
			<div className='d-flex flex-row-reverse' id='rock'>
				{renderPlaylist('Rock', elementiPlaylist1)}
			</div>
			<div className='d-flex flex-row-reverse' id='pop'>
				{renderPlaylist('Pop', elementiPlaylist2)}
			</div>
			<div className='d-flex flex-row-reverse' id='hiphop'>
				{renderPlaylist('Hip-Hop', elementiPlaylist3)}
			</div>
		</>
	);
};

export default Playlist;

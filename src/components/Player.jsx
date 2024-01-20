import { Col, Container, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NextButton from '../assets/playerbuttons/Next.png';
import PlayButton from '../assets/playerbuttons/Play.png';
import PreviousButton from '../assets/playerbuttons/Previous.png';
import RepeatButton from '../assets/playerbuttons/Repeat.png';
import ShuffleButton from '../assets/playerbuttons/Shuffle.png';

const Player = () => {
	const song = useSelector((state) => state.musicPlayer.player);

	return (
		<Container fluid className='fixed-bottom bg-container pt-1'>
			<Row className='d-flex ms-5'>
				<Col className='col-lg-10 offset-lg-2 d-flex justify-content-evenly'>
					<Row className='d-flex'>
						<Col className='col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1'>
							<Row>
								<div className='d-flex flex-row justify-content-evenly'>
									<div className='mx-3 my-1'>
										<img src={ShuffleButton} alt='shuffle' width={32} />
									</div>
									<div className='mx-3 my-1'>
										<Image src={PreviousButton} alt='previous' width={32} />
									</div>
									<div className='mx-3 my-1'>
										<Image src={PlayButton} alt='shuffle' width={32} />
									</div>
									<div className='mx-3 my-1'>
										<Image src={NextButton} alt='shuffle' width={32} />
									</div>
									<div className='mx-3 my-1'>
										<Image src={RepeatButton} alt='shuffle' width={32} />
									</div>
								</div>
							</Row>
						</Col>
					</Row>
					<Row className='justify-content-center playBar py-3'>
						<Col className='col-8 col-md-6'>
							<div className='progress'>
								<div
									className='progress-bar'
									role='progressbar'
									aria-valuenow='0'
									aria-valuemin='0'
									aria-valuemax='100'
								></div>
							</div>
						</Col>
					</Row>
					{song && (
						<div>
							<img src={song.album.cover_small} alt='Poster canzone' />
							<p>{song.title}</p>
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Player;

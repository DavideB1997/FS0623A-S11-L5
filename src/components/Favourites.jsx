import { Row } from 'react-bootstrap';
import { MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavouriteAction } from '../redux/actions';
import SingleSong from './SingleSong';

const Favourites = () => {
	const favourites = useSelector((state) => state.favourite.list);
	const dispatch = useDispatch();

	return (
		<>
			{favourites.map((fav, i) => {
				console.log(fav);
				return (
					<div className='favorite-song' key={i}>
						<SingleSong search={fav} num={0} />
						<MdFavorite
							color='green'
							size={48}
							className='mr-2 my-auto'
							onClick={() => dispatch(removeFromFavouriteAction(fav))}
						/>
					</div>
				);
			})}
		</>
	);
};

export default Favourites;

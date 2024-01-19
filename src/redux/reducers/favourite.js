import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from '../actions';

const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
	list: storedFavorites,
};

const favouriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_FAVOURITE:
			const updatedAddState = {
				...state,
				list: [...state.list, action.payload],
			};
			localStorage.setItem('favorites', JSON.stringify(updatedAddState.list));
			return updatedAddState;

		case REMOVE_FROM_FAVOURITE:
			const updatedRemoveState = {
				...state,
				list: state.list.filter((fav) => fav !== action.payload),
			};
			localStorage.setItem('favorites', JSON.stringify(updatedRemoveState.list));
			return updatedRemoveState;

		default:
			return state;
	}
};

export default favouriteReducer;

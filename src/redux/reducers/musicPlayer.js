import {} from '../actions';

const initialState = {
	song: storedFavorites,
};

const musicPlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_MUSICPLAYER:
			const updatedAddState = {
				song: [state.song, action.payload],
			};
			localStorage.setItem('favorites', JSON.stringify(updatedAddState.list));
			return updatedAddState;
	}
};

export default musicPlayerReducer;

import { ADD_TO_MUSICPLAYER } from '../actions';

const initialState = {
	player: null,
};

const musicPlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_MUSICPLAYER:
			return { player: action.payload };
		default:
			return state;
	}
};

export default musicPlayerReducer;

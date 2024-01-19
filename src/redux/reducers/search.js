import { GET_SEARCH } from '../actions';

const initialState = {
	data: [],
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SEARCH:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default searchReducer;
